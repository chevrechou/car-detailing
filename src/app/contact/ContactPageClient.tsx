"use client";

import { useMemo, useState, useRef } from "react";
import styles from "./contact.module.css";

const PHONE = "+16302403085";

export default function ContactPageClient() {
	const [vehicle, setVehicle] = useState("");
	const [service, setService] = useState("Wash & Vac"); // default service
	const [location, setLocation] = useState("");
	const [when, setWhen] = useState("");

	const [copied, setCopied] = useState(false);
	const hideTimer = useRef<number | null>(null);

	const msg = useMemo(() => {
		const parts = [
			"Hi, this is a booking request.",
			vehicle && `Vehicle: ${vehicle}`,
			service && `Service: ${service}`,
			location && `Location: ${location}`,
			when && `Preferred time: ${when}`,
			"Please text me back with availability. Thanks!",
		]
			.filter(Boolean)
			.join("\n");

		return parts;
	}, [vehicle, service, location, when]);

	function copy() {
		navigator.clipboard.writeText(msg).then(() => {
			setCopied(true);
			if (hideTimer.current) window.clearTimeout(hideTimer.current);
			hideTimer.current = window.setTimeout(() => setCopied(false), 1600);
		});
	}

	return (
		<section className={styles.wrap}>
			<h1>Contact & Booking</h1>
			<p className="muted">Tell us about your vehicle and choose a service below.</p>

			<div className={styles.formGrid}>
				<label className={styles.field}>
					<span>Vehicle</span>
					<input
						type="text"
						placeholder="Year Make Model"
						value={vehicle}
						onChange={(e) => setVehicle(e.target.value)}
					/>
				</label>

				{/* ✅ Radio buttons for services */}
				<fieldset className={styles.serviceGroup}>
					<legend className={styles.serviceLegend}>Select a service</legend>

					<label className={styles.serviceOption}>
						<input
							type="radio"
							name="service"
							value="Wash & Vac"
							checked={service === "Wash & Vac"}
							onChange={(e) => setService(e.target.value)}
						/>
						Wash & Vac
					</label>

					<label className={styles.serviceOption}>
						<input
							type="radio"
							name="service"
							value="Exterior Detail"
							checked={service === "Exterior Detail"}
							onChange={(e) => setService(e.target.value)}
						/>
						Exterior Detail
					</label>

					<label className={styles.serviceOption}>
						<input
							type="radio"
							name="service"
							value="Interior Detail"
							checked={service === "Interior Detail"}
							onChange={(e) => setService(e.target.value)}
						/>
						Interior Detail
					</label>

					<label className={styles.serviceOption}>
						<input
							type="radio"
							name="service"
							value="Complete Exterior & Interior"
							checked={service === "Complete Exterior & Interior"}
							onChange={(e) => setService(e.target.value)}
						/>
						Complete Exterior & Interior
					</label>
				</fieldset>


				<label className={styles.field}>
					<span>Location</span>
					<input
						type="text"
						placeholder="City or address (Dallas, TX)"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
					/>
				</label>

				<label className={styles.field}>
					<span>Preferred time</span>
					<input
						type="text"
						placeholder="Saturday morning, next Tuesday, etc."
						value={when}
						onChange={(e) => setWhen(e.target.value)}
					/>
				</label>
			</div>

			<label className={styles.preview}>
				<span>Message preview</span>
				<textarea readOnly value={msg} />
			</label>

			<div className={styles.actions}>
				<button type="button" className={styles.btnPrimary} onClick={copy}>
					Copy text
				</button>
				<a className={styles.btnGhost} href={`sms:${PHONE}?&body=${encodeURIComponent(msg)}`}>
					Send text
				</a>
				<a className={styles.btnLine} href={`tel:${PHONE}`}>
					Call instead
				</a>
			</div>
		</section>
	);
}
