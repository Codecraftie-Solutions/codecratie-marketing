import { ecosystemCopy as c } from "@/lib/data/content";
import Image from "next/image";
import { images } from "@/lib/data/images";
import { site } from "@/lib/constants/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Ecosystem() {
  return (
    <section id="ecosystem">
      <div className="wrap">
        <SectionHeading k={c.k} title={c.title} />
        <div className="eco">
          <div><div className="im"><Image src={images.build.src} alt={images.build.alt} fill sizes="(max-width: 860px) 100vw, 380px" style={{ objectFit: "cover" }} /></div><b>BUILD</b><p>{c.build}</p><a className="btn p" href="/start">Start a Project</a></div>
          <div>
            <div className="im"><Image src={images.learn.src} alt={images.learn.alt} fill sizes="(max-width: 860px) 100vw, 380px" style={{ objectFit: "cover" }} /></div><b>LEARN</b><h3>{c.learnTitle}</h3><p>{c.learn}</p>
            <a className="btn" href={site.academyUrl} rel="noopener">Explore CodeCraftie Academy</a>
          </div>
          <div>
            <div className="im"><Image src={images.grow.src} alt={images.grow.alt} fill sizes="(max-width: 860px) 100vw, 380px" style={{ objectFit: "cover" }} /></div><b>GROW</b><p>{c.grow}</p>
            {site.careerLaunchUrl && <a className="btn" href={site.careerLaunchUrl} rel="noopener">Explore Career Launch</a>}
          </div>
        </div>
      </div>
    </section>
  );
}
