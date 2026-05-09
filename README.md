# Resend contact forms

Contact forms POST JSON to a handler that sends mail through [Resend](https://resend.com/).

## Why two handlers?

This app uses **`output: 'export'`** (static HTML on shared hosting). **Next.js API routes are not deployed** in that mode, so `POST /api/contact` returns **404** on production.

| Environment | Handler |
|-------------|---------|
| Local `npm run dev` | `POST /api/contact` (Next.js route) |
| Production (FTP static site) | `POST /contact-handler.php` (PHP + Resend HTTP API) |

The browser target is set at build time with `NEXT_PUBLIC_CONTACT_SUBMIT_URL` (see GitHub Actions workflow).

## 1) Local development (`.env.local`)

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FROM_EMAIL=EAWestern Website <contact@eawestern.com>
CONTACT_TO_EMAIL=info@eawestern.com
```

- `CONTACT_FROM_EMAIL` must use an address on your **Resend-verified** domain.
- Do not commit `.env.local`.

Run `npm run dev` and test `/contact`, `/insurance/contact`, `/vehicles/contact`, `/safaris/contact`.

## 2) Production (GitHub Actions → Host Africa)

Add these **repository secrets** (Settings → Secrets and variables → Actions):

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (same values as local)
- `CONTACT_TO_EMAIL`

The workflow builds with `NEXT_PUBLIC_CONTACT_SUBMIT_URL=/contact-handler.php`, then writes `out/contact-secrets.json` (blocked by `.htaccess`, never commit it).

**Server requirements:** PHP with **cURL** enabled (standard on shared hosting).

## 3) Resend domain

In Resend → **Domains**, verify `eawestern.com` (DNS), then use that domain on `CONTACT_FROM_EMAIL`.

## 4) If you ever move to Node hosting

Remove `output: 'export'`, deploy on a platform that runs Next.js server-side, set `NEXT_PUBLIC_CONTACT_SUBMIT_URL` empty or omit it so forms use `/api/contact` only.
