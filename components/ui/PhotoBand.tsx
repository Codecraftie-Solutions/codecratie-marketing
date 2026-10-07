import Image from "next/image";
import type { Img } from "@/lib/data/images";

/** Full-width editorial photo with a short caption. Decorative rhythm between content sections. */
export function PhotoBand({ img, caption, tall }: { img: Img; caption?: string; tall?: boolean }) {
  return (
    <div className={`band${tall ? " tall" : ""}`}>
      <Image src={img.src} alt={img.alt} fill sizes="100vw" style={{ objectFit: "cover" }} />
      {caption && <div className="wrap"><p>{caption}</p></div>}
    </div>
  );
}
