# Resend Contact Form Setup

This project now sends all contact form submissions to Resend through `POST /api/contact`.

## 1) Add environment variables

Create or update `.env.local` with:

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=Website Contact <contact@yourdomain.com>
CONTACT_TO_EMAIL=you@yourdomain.com
```

Notes:
- `CONTACT_FROM_EMAIL` must use a sender from your verified Resend domain.
- `CONTACT_TO_EMAIL` is the inbox where all form leads are delivered.

## 2) Verify your domain in Resend

In Resend:
- Go to **Domains**
- Add your domain and required DNS records (SPF/DKIM)
- Wait until status is **Verified**

## 3) Test locally

Run:

```bash
npm run dev
```

Submit these pages:
- `/contact`
- `/insurance/contact`
- `/vehicles/contact`
- `/safaris/contact`

Each submission should trigger one email in `CONTACT_TO_EMAIL`.

## 4) Deploy

Add the same env vars in your hosting provider (Vercel/Netlify/etc.) and redeploy.
