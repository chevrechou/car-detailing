import Image from "next/image";
import styles from "./gallery.module.css";

const photos = [
  { src: "/gallery/01.jpg", alt: "Sedan exterior after wash and wax" },
  { src: "/gallery/02.jpg", alt: "SUV interior deep clean" },
  { src: "/gallery/03.jpg", alt: "Glossy hood reflection after polish" },
  { src: "/gallery/04.jpg", alt: "Wheel and tire detail close up" },
  { src: "/gallery/05.jpg", alt: "Trunk vacuum and shampoo finish" },
  { src: "/gallery/06.jpg", alt: "Headlight restoration before and after" },
  { src: "/gallery/07.jpg", alt: "Ceramic coating water beading" },
  { src: "/gallery/08.jpg", alt: "Leather cleaned and conditioned" },
  { src: "/gallery/09.jpg", alt: "Black paint corrected swirl removal" },
  { src: "/gallery/10.jpg", alt: "Engine bay detailed" },
  { src: "/gallery/11.jpg", alt: "Dashboard dust free and matte finish" },
  { src: "/gallery/12.jpg", alt: "Sunset shot with mirror finish" },
  { src: "/gallery/13.jpg", alt: "Carpet shampoo lines" },
  { src: "/gallery/14.jpg", alt: "Door jambs cleaned" },
  { src: "/gallery/15.jpg", alt: "Full exterior reflection shot" },
];

export const metadata = {
  title: "Gallery | Pay Attention 2 Detail",
  description: "A look at recent details and finishes.",
};

export default function GalleryPage() {
  return (
    <section>
      <h1>Gallery</h1>
      <p className="muted">Recent work and finishes from Pay Attention 2 Detail.</p>

      <div className={styles.grid} role="list">
        {photos.map((p, i) => (
          <figure className={styles.tile} key={i} role="listitem">
            <div className={styles.media}>
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 400px"
                className={styles.img}
                priority={i < 3}
              />
            </div>
            <figcaption className={styles.caption}>{p.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
