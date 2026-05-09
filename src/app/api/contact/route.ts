import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL;
const fromEmail = process.env.CONTACT_FROM_EMAIL;

type ContactPayload = {
  source?: string;
  locale?: string;
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  [key: string]: unknown;
};

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const source = text(body.source) || "general-contact";
  const locale = text(body.locale) || "en";
  const firstName = text(body.firstName);
  const lastName = text(body.lastName);
  const fullName = text(body.name) || [firstName, lastName].filter(Boolean).join(" ").trim();
  const email = text(body.email);
  const phone = text(body.phone);
  const subject = text(body.subject) || `New ${source} inquiry`;
  const message = text(body.message) || "No additional message provided.";

  if (!fullName || !email) {
    return NextResponse.json(
      { error: "Name and email are required." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);

  const extraFields = Object.entries(body)
    .filter(([key, value]) => {
      if (value == null || value === "") {
        return false;
      }

      return ![
        "source",
        "locale",
        "firstName",
        "lastName",
        "name",
        "email",
        "phone",
        "subject",
        "message",
      ].includes(key);
    })
    .map(([key, value]) => `${key}: ${String(value)}`);

  const html = `
    <h2>New inquiry from ${source}</h2>
    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Locale:</strong> ${locale}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
    ${extraFields.length ? `<hr/><p><strong>Additional details</strong><br/>${extraFields.join("<br/>")}</p>` : ""}
  `;

  try {
    await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[${source}] ${subject}`,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 },
    );
  }
}
