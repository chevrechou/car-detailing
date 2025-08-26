import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <section>
      {/* HERO with logo left + text right */}
      <div className={styles.homeHero}>
        <div className={styles.heroContent}>
          {/* Left side logo */}
          <div className={styles.heroLeft}>
            <img
              src="/car-logo.jpg"
              alt="Pay Attention 2 Detail logo"
              className={styles.heroLogo}
            />
          </div>

          {/* Right side text */}
          <div className={styles.heroRight}>
            <h1 className={styles.heroTitle}>Pay Attention 2 Detail</h1>
            <h2 className={styles.heroTitleDesc}>Professional Car Detailing</h2>
            <p className={styles.heroSubtitle}>
              Professional. Fast. Reliable. Mobile car detailing in Dallas with
              clean interiors, glossy paint, and simple pricing.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>Mobile service</span>
              <span className={styles.badge}>Clear quotes</span>
              <span className={styles.badge}>Satisfaction focused</span>
            </div>

            <div className={styles.heroActions}>
              <Link href="/services" className={styles.btnPrimary}>
                View Services
              </Link>
              <Link href="/contact" className={styles.btnGhost}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* VIDEO SECTION with overlay copy */}
      <section className={styles.videoSection} aria-label="Detailing in action">
        <div className={styles.videoWrap}>
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

          {/* Overlay text */}
          <div className={styles.videoOverlay}>
            <h3 className={styles.videoTitle}>We come to you</h3>
            <p className={styles.videoSubtitle}>
              Same week booking, clear pricing, and a finish that turns heads
            </p>

            <ul className={styles.videoBullets} aria-label="Key benefits">
              <li>Interior refresh that feels brand new</li>
              <li>Paint safe wash and wax for deep gloss</li>
              <li>Fast communication and reliable arrival</li>
            </ul>

            <div className={styles.videoActions}>
              <Link href="/pricing" className={styles.btnGhost}>See Pricing</Link>
              <Link href="/contact" className={styles.btnPrimary}>Book a Detail</Link>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
