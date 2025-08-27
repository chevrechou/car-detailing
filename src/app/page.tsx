import Link from "next/link";
import styles from "./page.module.css";

/** Update your video assets here */
const VIDEO_POSTER = "/media/cleaning-poster.jpg";
const VIDEO_WEBM = "/media/cleaning.webm";
const VIDEO_MP4 = "/gallery/car-wash-clip.mp4";

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

      {/* WE COME TO YOU - text left + video right */}
      <section className={styles.splitSection} aria-label="We come to you">
        {/* Text left */}
        <div className={styles.splitLeft}>
          <h2 className={styles.splitTitle}>We come to you</h2>
          <p className={styles.splitSubtitle}>
            Save time and skip the shop. We bring professional detailing to your
            home or office with clear pricing and easy scheduling. Our goal: a
            spotless car that feels new and turns heads.
          </p>

          {/* Three bullet points */}
          <ul className={styles.splitBullets}>
            <li>
              <strong>Fresh interiors</strong> – Deep clean for seats, carpets,
              and vents, leaving a crisp scent and a cabin you’ll enjoy every
              day.
            </li>
            <li>
              <strong>Glossy, protected paint</strong> – Safe wash and premium
              wax that enhance shine and shield your finish.
            </li>
            <li>
              <strong>On time, every time</strong> – Reliable arrivals and clear
              updates from booking to completion.
            </li>
          </ul>

          <div className={styles.splitActions}>
            <Link href="/pricing" className={styles.btnPricing}>
              See Pricing
            </Link>
            <Link href="/contact" className={styles.btnPrimary}>
              Book a Detail
            </Link>
          </div>
        </div>

        {/* Video right */}
        <div className={styles.splitRight}>
          <video
            className={styles.splitVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={VIDEO_POSTER}
          >
            <source src={VIDEO_MP4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </section>
  );
}
