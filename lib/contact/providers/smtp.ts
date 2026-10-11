import nodemailer from "nodemailer";
import type { EmailProvider } from "./index";

/**
 * Sends through any SMTP server (your mail host, Zoho, Google Workspace…).
 * Needs SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS and SMTP_FROM.
 * SMTP_SECURE=true for port 465.
 */
export function smtpProvider(): EmailProvider | null {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SECURE } = process.env;
  if (!SMTP_HOST || !SMTP_FROM) return null;
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === "true",
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  return {
    async send(m) {
      await transport.sendMail({ from: SMTP_FROM, to: m.to, replyTo: m.replyTo, subject: m.subject, text: m.text });
    },
  };
}
