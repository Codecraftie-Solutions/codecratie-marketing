export type EmailMessage = { to: string; replyTo: string; subject: string; text: string };
export interface EmailProvider { send(message: EmailMessage): Promise<void> }

/** Development only: prints the message to the server console. Never active in production. */
const logProvider: EmailProvider = {
  async send(m) {
    console.info(`[contact:log] to=${m.to} subject=${m.subject}\n${m.text}`);
  },
};

/**
 * Add real providers here (one file each, selected by EMAIL_PROVIDER).
 * Callers never import a provider directly.
 */
export function getProvider(): EmailProvider | null {
  switch (process.env.EMAIL_PROVIDER) {
    case "log":
      return process.env.NODE_ENV === "production" ? null : logProvider;
    default:
      return null;
  }
}
