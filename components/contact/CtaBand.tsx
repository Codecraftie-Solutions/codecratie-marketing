import { ctaCopy } from "@/lib/data/content";

import Image from "next/image";
import { images } from "@/lib/data/images";

const brief = `<span class="c">problem:</span> what slows the business down
<span class="c">build:</span>   the system that fixes it
<span class="c">launch:</span>  <span class="a">together</span>`;

export function CtaBand() {
  return (
    <section className="dark cta" data-tone="dark">
      <Image className="bg" src={images.cta.src} alt="" fill sizes="100vw" style={{ objectFit: "cover" }} />
      <div className="wrap">
        <div>
          <h2>{ctaCopy.title}</h2>
          <p className="lede">{ctaCopy.lede}</p>
          <div className="row"><a className="btn p" href="/start">Start a Project</a><a className="btn" href="/start#contact">Talk to CodeCraftie</a></div>
        </div>
        <div className="win" aria-hidden="true">
          <div className="bar"><i></i><i></i><i></i><span style={{ marginLeft: 8 }}>project.brief</span></div>
          <pre dangerouslySetInnerHTML={{ __html: brief }} />
        </div>
      </div>
    </section>
  );
}
