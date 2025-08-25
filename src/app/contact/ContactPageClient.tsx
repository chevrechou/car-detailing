"use client";

import { useMemo, useState, useRef } from "react";
import styles from "./contact.module.css";

const PHONE = "(630) 240-3085";

export default function ContactPageClient() {
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [service, setService] = useState("Wash & Vac");
  const [location, setLocation] = useState("");
  const [when, setWhen] = useState("");

  const [copied, setCopied] = useState(false);
  const hideTimer = useRef<number | null>(null);

  const msg = useMemo(() => {
    const parts = [
      "Hi, this is a booking request.",
      name && `Name: ${name}`,
      vehicle && `Vehicle: ${vehicle}`,
      service && `Service: ${service}`,
      location && `Location: ${location}`,
      when && `Preferred time: ${when}`,
      "Please text me back with availability. Thanks!",
    ]
      .filter(Boolean)
      .join("\n");
    return parts;
  }, [name, vehicle, service, location, when]);

  function copy() {
    navigator.clipboard.writeText(msg).then(() => {
      setCopied(true);
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
      hideTimer.current = window.setTimeout(() => setCopied(false), 1500);
    });
  }

  return (
    <section className={styles.wrap}>
      <h1>Contact and Booking</h1>
      <p className="muted">Quickest way to book. Text or call and we will confirm.</p>

      {/* TOP SECTION: Steps (left) and CTA (right) */}
      <div className={styles.topRow}>
        <aside className={styles.stepsCard} aria-label="How to book">
          <h3>How it works</h3>
          <ol className={styles.stepsList}>
            <li><strong>Fill the form</strong> with name, vehicle, service, location, and time.</li>
            <li><strong>Check preview</strong> to make sure it looks right.</li>
            <li><strong>Copy text</strong> with one tap.</li>
            <li><strong>Send text</strong> to {PHONE} or call instead.</li>
          </ol>
        </aside>

        <aside className={styles.callCard} aria-label="Call now">
          <h3>Call now</h3>
          <p className={styles.bigPhone}>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
          </p>
          <p className={styles.hours}>Hours: Mon to Sat, 9am to 6pm</p>
          <a className={styles.btnHero} href={`tel:${PHONE}`}>Call Pay Attention 2 Detail</a>
        </aside>
      </div>

      {/* BOTTOM SECTION */}
      <div className={styles.bottomRow}>
        <div className={styles.formGrid}>
          {/* Name + Vehicle */}
          <label className={`${styles.field} ${styles.col6}`}>
            <span>Name</span>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className={`${styles.field} ${styles.col6}`}>
            <span>Vehicle</span>
            <input
              type="text"
              placeholder="Year Make Model"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            />
          </label>

          {/* Service group (full width) */}
          <fieldset className={`${styles.serviceGroup} ${styles.col12}`}>
            <legend className={styles.serviceLegend}>Select a service</legend>
            {["Wash & Vac", "Exterior Detail", "Interior Detail", "Complete Exterior & Interior"]
              .map((opt) => (
                <label key={opt} className={styles.serviceOption}>
                  <input
                    type="radio"
                    name="service"
                    value={opt}
                    checked={service === opt}
                    onChange={(e) => setService(e.target.value)}
                  />
                  {opt}
                </label>
              ))}
          </fieldset>

          {/* Location + Preferred time */}
          <label className={`${styles.field} ${styles.col6}`}>
            <span>Location</span>
            <input
              type="text"
              placeholder="City or address (Dallas, TX)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>

          <label className={`${styles.field} ${styles.col6}`}>
            <span>Preferred time</span>
            <input
              type="text"
              placeholder="Saturday morning, next Tuesday, etc."
              value={when}
              onChange={(e) => setWhen(e.target.value)}
            />
          </label>

          {/* Preview + Actions (full width) */}
          <label className={`${styles.preview} ${styles.col12}`}>
            <span>Message preview</span>
            <textarea readOnly value={msg} />
          </label>

          <div className={`${styles.actions} ${styles.col12}`}>
            <button type="button" className={styles.btnPrimary} onClick={copy}>
              Copy text
            </button>

            {/* Popover anchored above button */}
            <div
              className={`${styles.copyToast} ${copied ? styles.copyToastVisible : ""}`}
              role="status"
              aria-live="polite"
            >
              Copied!
            </div>

            <a className={styles.btnGhost} href={`sms:${PHONE}?&body=${encodeURIComponent(msg)}`}>
              Send text
            </a>
            <a className={styles.btnLine} href={`tel:${PHONE}`}>
              Call instead
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
