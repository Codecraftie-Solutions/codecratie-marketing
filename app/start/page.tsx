import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/constants/site";
import { PageHead } from "@/components/layout/PageHead";
import { ProjectForm } from "@/components/contact/ProjectForm";

export const metadata = pageMetadata({
  title: "Start a project",
  description: "Tell Code-Craftie Solutions what you want to build. Plain language is fine.",
  path: "/start",
});

export default function Page() {
  return (
    <>
      <PageHead
        title="Tell us what you want to build."
        lede="Plain language is fine. We read every message and reply with how we would approach it."
      />
      <section className="section section-tight">
        <div className="wrap form-wrap">
          <ProjectForm />
          <p className="muted" id="contact">
            Prefer email? Write to <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
