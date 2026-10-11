import { pageMetadata } from "@/lib/utils/metadata";
import { site } from "@/lib/constants/site";
import { academy } from "@/lib/data/content";
import { PageHead } from "@/components/layout/PageHead";

export const metadata = pageMetadata({
  title: "Academy",
  description: "CodeCraftie Academy is the training arm of Code-Craftie Solutions. It runs on its own website.",
  path: "/academy",
});

export default function Page() {
  return (
    <PageHead title={academy.title} lede={academy.text}>
      <div className="actions">
        <a className="btn btn-primary" href={site.academyUrl} rel="noopener">
          {academy.cta}
        </a>
      </div>
    </PageHead>
  );
}
