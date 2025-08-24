import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About | Pay Attention 2 Detail",
  description:
    "Meet Jeremy Smith, a mobile detailer serving the Dallas area with a focus on clean interiors and glossy, protected paint.",
};

export default function AboutPage() {
  return (
    <section className={styles.centerWrap}>
      <h1>About Us</h1>

      <div className={styles.profile}>
        <div className={styles.headshot}>
          <Image
            src="/gallery/gallery-2.jpg" // replace with your real image path
            alt="Jeremy Smith - Mobile Detailer"
            fill
            className={styles.headshotImg}
            priority
          />
        </div>

        <div className={styles.bio}>
          <p>
            Hi, I am <strong>Jeremy Smith</strong>, a mobile detailer serving
            the Dallas area. I started Pay Attention 2 Detail because I care
            about the little things that make a car feel new again: clean vents,
            crisp carpets, and deep gloss. My favorite part is the moment a
            customer sees their vehicle and smiles.
          </p>

          <p>
            Whether you want a tidy daily driver or a weekend shine, I come to
            you with the right tools and a careful process. If you need your car
            serviced, I am your person. Send me a message for pricing. I often
            run specials and multi-vehicle discounts.
          </p>
        </div>
      </div>
    </section>
  );
}
