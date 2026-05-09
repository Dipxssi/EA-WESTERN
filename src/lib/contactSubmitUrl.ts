/** Where contact forms POST. Static export uses PHP on shared hosting; local dev uses Next API route. */
export const CONTACT_SUBMIT_URL =
  process.env.NEXT_PUBLIC_CONTACT_SUBMIT_URL ?? "/api/contact";
