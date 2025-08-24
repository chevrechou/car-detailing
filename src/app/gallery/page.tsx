import Image from "next/image";
import styles from "./gallery.module.css";

const photos = [
  { src: "/gallery/gallery-1.jpeg", alt: "SUV exterior after wash and wax" },
  { src: "/gallery/gallery-2.jpg", alt: "Sedan interior deep clean" },
  { src: "/gallery/gallery-3.jpg", alt: "Wheel and tire detail close up" },
  { src: "/gallery/gallery-8.jpg", alt: "Sedan exterior after wash and wax" },
  { src: "/gallery/gallery-6.jpeg", alt: "Hood cleaned and waxed" },
  { src: "/gallery/gallery-9.jpg", alt: "Black leather cleaned and conditioned" },
  { src: "/gallery/gallery-7.jpg", alt: "Seats thoroughly vacuumed and shampooed" },
  { src: "/gallery/gallery-4.jpg", alt: "Hood detailed and wax finished" },
  { src: "/gallery/gallery-5.jpg", alt: "Seats dust, crumbs, and stain removal" },
  { src: "/gallery/gallery-10.jpg", alt: "Front hood and grille polished" },
  { src: "/gallery/gallery-11.jpg", alt: "Door panel cleaned and dressed" },
  { src: "/gallery/gallery-12.jpg", alt: "Leather seats deep-cleaned & conditioned" },
  { src: "/gallery/gallery-13.jpg", alt: "Hood and front grille washed, decontaminated, and protected with wax" },
  { src: "/gallery/gallery-14.jpg", alt: "Leather seats restored and conditioned" },
  { src: "/gallery/gallery-15.jpg", alt: "Dashboard detailed and protected" },
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
