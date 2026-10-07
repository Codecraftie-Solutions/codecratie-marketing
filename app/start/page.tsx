import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectForm } from "@/components/contact/ProjectForm";

export const metadata = pageMetadata({
  title: "Start a Project",
  description:
    "Tell CodeCraftie Solutions what you're trying to build. You don't need a technical specification.",
  path: "/start",
});

export default function Page() {
  return (
    <section id="start">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <SectionHeading
          k="Start a Project"
          title="Tell us what you're trying to build."
          as="h1"
        />
        <p className="lede">
          Plain language is fine. No technical terms needed.
        </p>
        <ProjectForm />
        <p id="contact" style={{ marginTop: 44, color: "var(--muted)" }}>
          Prefer to talk first?{" "}
          {site.contactEmail ? (
            <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          ) : (
            <strong style={{ color: "var(--ink)" }}>
              info@codecraftie.com
            </strong>
          )}
        </p>
      </div>
    </section>
  );
}
