import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section>
      <div className={styles.homeHero} aria-label="Hero video of a detailed car">
        <video
          className={styles.heroMedia}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/car/car-wash.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className={styles.heroOverlay}>
          <h1 className={styles.heroTitle}>Pay Attention 2 Detail</h1>
          <h2 className={styles.heroTitleDesc}>Professional Car Detailing</h2>
          <p className={styles.heroSubtitle}>
            Professional. Fast. Reliable. Mobile car detailing in Dallas with clean interiors, glossy paint, and simple pricing.
          </p>

          {/* moved inside overlay */}
          <div className={styles.badges}>
            <span className={styles.badge}>Mobile service</span>
            <span className={styles.badge}>Clear quotes</span>
            <span className={styles.badge}>Satisfaction focused</span>
          </div>

          <div className={styles.heroActions}>
            <Link href="/services" className={styles.btnPrimary}>View Services</Link>
            <Link href="/contact" className={styles.btnGhost}>Book Now</Link>
          </div>
        </div>
      </div>

      {/* keep the rest of your homepage sections here */}
    </section>
  );
}
