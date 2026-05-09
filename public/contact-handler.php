<?php
/**
 * Contact form handler for static hosting (Next.js output: 'export').
 * Reads secrets from contact-secrets.json (generated in CI, blocked by .htaccess).
 */
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$secretsPath = __DIR__ . '/contact-secrets.json';
if (!is_readable($secretsPath)) {
  http_response_code(500);
  echo json_encode(['error' => 'Email service is not configured.']);
  exit;
}

$secrets = json_decode(file_get_contents($secretsPath), true);
if (
  !is_array($secrets)
  || empty($secrets['resendApiKey'])
  || empty($secrets['fromEmail'])
  || empty($secrets['toEmail'])
) {
  http_response_code(500);
  echo json_encode(['error' => 'Email service is not configured.']);
  exit;
}

$raw = file_get_contents('php://input');
$body = json_decode($raw, true);
if (!is_array($body)) {
  http_response_code(400);
  echo json_encode(['error' => 'Invalid request body.']);
  exit;
}

function contact_text($v): string
{
  return is_string($v) ? trim($v) : '';
}

$source = contact_text($body['source'] ?? '') ?: 'general-contact';
$locale = contact_text($body['locale'] ?? '') ?: 'en';
$firstName = contact_text($body['firstName'] ?? '');
$lastName = contact_text($body['lastName'] ?? '');
$fullName = contact_text($body['name'] ?? '') ?: trim($firstName . ' ' . $lastName);
$email = contact_text($body['email'] ?? '');
$phone = contact_text($body['phone'] ?? '');
$subject = contact_text($body['subject'] ?? '') ?: ('New ' . $source . ' inquiry');
$message = contact_text($body['message'] ?? '') ?: 'No additional message provided.';

if ($fullName === '' || $email === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Name and email are required.']);
  exit;
}

$skipKeys = ['source', 'locale', 'firstName', 'lastName', 'name', 'email', 'phone', 'subject', 'message'];
$extraLines = [];
foreach ($body as $key => $value) {
  if (in_array($key, $skipKeys, true)) {
    continue;
  }
  if ($value === null || $value === '') {
    continue;
  }
  $extraLines[] = htmlspecialchars((string) $key, ENT_QUOTES, 'UTF-8')
    . ': '
    . htmlspecialchars((string) $value, ENT_QUOTES, 'UTF-8');
}

$h = static function (string $s): string {
  return htmlspecialchars($s, ENT_QUOTES, 'UTF-8');
};

$html = '<h2>New inquiry from ' . $h($source) . '</h2>'
  . '<p><strong>Name:</strong> ' . $h($fullName) . '</p>'
  . '<p><strong>Email:</strong> ' . $h($email) . '</p>'
  . '<p><strong>Phone:</strong> ' . ($phone !== '' ? $h($phone) : 'Not provided') . '</p>'
  . '<p><strong>Locale:</strong> ' . $h($locale) . '</p>'
  . '<p><strong>Subject:</strong> ' . $h($subject) . '</p>'
  . '<p><strong>Message:</strong><br/>' . nl2br($h($message)) . '</p>';

if (count($extraLines) > 0) {
  $html .= '<hr/><p><strong>Additional details</strong><br/>' . implode('<br/>', $extraLines) . '</p>';
}

$payload = [
  'from' => $secrets['fromEmail'],
  'to' => [$secrets['toEmail']],
  'reply_to' => [$email],
  'subject' => '[' . $source . '] ' . $subject,
  'html' => $html,
];

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    'Authorization: Bearer ' . $secrets['resendApiKey'],
    'Content-Type: application/json',
  ],
  CURLOPT_POSTFIELDS => json_encode($payload),
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_TIMEOUT => 30,
]);
curl_exec($ch);
$code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($code >= 200 && $code < 300) {
  echo json_encode(['ok' => true]);
  exit;
}

http_response_code(500);
echo json_encode(['error' => 'Failed to send email. Please try again.']);
