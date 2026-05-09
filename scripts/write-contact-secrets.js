const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const key = process.env.RESEND_API_KEY;
const from = process.env.CONTACT_FROM_EMAIL;
const to = process.env.CONTACT_TO_EMAIL;

if (!key || !from || !to) {
  console.warn(
    'write-contact-secrets: RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL not all set; skipping contact-secrets.json',
  );
  process.exit(0);
}

if (!fs.existsSync(outDir)) {
  console.error('write-contact-secrets: out/ not found — run npm run build first');
  process.exit(1);
}

const data = {
  resendApiKey: key,
  fromEmail: from,
  toEmail: to,
};

fs.writeFileSync(
  path.join(outDir, 'contact-secrets.json'),
  JSON.stringify(data),
  'utf8',
);
console.log('✓ contact-secrets.json written to out/');
