import type { Inquiry } from "./schema";
import { getProvider } from "./providers";

export class EmailNotConfiguredError extends Error {
  constructor() { super("Email delivery is not configured."); this.name = "EmailNotConfiguredError"; }
}

function format(d: Inquiry): string {
  return [
    `Name: ${d.name}`, `Email: ${d.email}`, `Company: ${d.company || "-"}`, `Phone: ${d.phone || "-"}`,
    `Stage: ${d.stage}`, `Service: ${d.service}`, `Timeline: ${d.timeline}`, `Budget: ${d.budget}`,
    "", "What they want to build:", d.build, "", "Problem they are solving:", d.problem || "-", "", "Additional information:", d.more || "-",
  ].join("\n");
}

/** The only function the rest of the app calls. Throws EmailNotConfiguredError until a provider and CONTACT_EMAIL are set. */
export async function sendProjectInquiry(data: Inquiry): Promise<void> {
  const to = process.env.CONTACT_EMAIL;
  const provider = getProvider();
  if (!to || !provider) throw new EmailNotConfiguredError();
  await provider.send({ to, replyTo: data.email, subject: `New project inquiry from ${data.name}`, text: format(data) });
}
