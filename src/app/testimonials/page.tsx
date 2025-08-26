"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./testimonials.module.css";

type Review = {
	id: number;
	name: string;
	stars: number;
	text: string;
	date?: string; // NEW
};

const REVIEWS: Review[] = [
	{
		id: 1,
		name: "L. H.",
		stars: 5,
		date: "26 Oct", // no date provided, keep a neutral placeholder or remove this key
		text:
			"I HIGHLY recommend Jeremy to come out to wash and detail your vehicle! Very fair prices, great with communication, and my car looks amazing! I had her washed and waxed with an inside detail. When I opened my car door to check out the interior, I was met with a heavenly clean scent and shining surfaces! Jeremy met me where I was at when it came to scheduling an appointment and 100% delivered! I’m a true believer in supporting small businesses and Pay Attention 2 Detail is exactly why. You will get above and beyond service that is top notch at a great price! I’ll definitely be using his services again in the near future! Thanks again, Jeremy!",
	},
	{
		id: 2,
		name: "A. H.",
		stars: 5,
		date: "11 Oct",
		text:
			"Our family highly recommends. On time. Professional. Hard working. Car looks new. Took longer than anticipated because of oil stains, this was discussed and agreed upon as soon as oil stains were discovered! Will use again!",
	},
	{
		id: 3,
		name: "S. R.",
		stars: 5,
		date: "6 Sep",
		text:
			"Jeremy just detailed my car and it looks great. Excellent communication throughout. Would highly recommend this service.",
	},
	{
		id: 4,
		name: "D. E.",
		stars: 5,
		date: "30 Aug",
		text:
			"Jeremy accommodated my schedule. He was polite and a hard worker. He did a great job getting my daughter’s car cleaned up for school.",
	},
	{
		id: 5,
		name: "K. H.",
		stars: 5,
		date: "30 Aug",
		text:
			"Oh my gosh! Jeremy is awesome! He cleaned the inside and outside of my car and it’s beautiful! He is all about his customers! He will take good care of you! He was on time, very informative, and does an excellent job! Will definitely be using him again! He does not disappoint!",
	},
];

function Stars({ count }: { count: number }) {
	const full = "★".repeat(Math.max(0, Math.min(5, count)));
	const empty = "☆".repeat(5 - Math.max(0, Math.min(5, count)));
	return (
		<span className={styles.stars} aria-label={`${count} out of 5 stars`}>
			{full}
			<span className={styles.starsEmpty}>{empty}</span>
		</span>
	);
}

export default function TestimonialsPage() {
	const [index, setIndex] = useState(0);

	function prev() {
		setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length);
	}
	function next() {
		setIndex((i) => (i + 1) % REVIEWS.length);
	}

	const visible = [
		REVIEWS[index],
		REVIEWS[(index + 1) % REVIEWS.length],
		REVIEWS[(index + 2) % REVIEWS.length],
	];

	return (
		<main className={styles.page}>
			<header className={styles.headerRow}>
				<h1>Testimonials</h1>
				<Link href="/contact" className={styles.cta}>
					Book Now
				</Link>
			</header>

			{/* Top section: image left, testimonial text right */}
			<section className={styles.topSection} aria-label="Featured testimonial">
				<div className={styles.topLeft}>
					<img
						src="/happy-c.jpg"
						alt="Happy client after car detailing"
						className={styles.clientImg}
					/>
				</div>
				<div className={styles.topRight}>
					<h2 className={styles.featuredTitle}>Happy customers, clean cars</h2>
					<blockquote className={styles.featuredQuote}>
						<p>
							I HIGHLY recommend Jeremy! Very fair prices, great communication, and my car looks amazing. A heavenly clean scent and shining surfaces inside, glossy paint outside — Pay Attention 2 Detail truly delivers above and beyond!
						</p>
						<footer>
							<strong>L. H.</strong> <Stars count={5} />
						</footer>
					</blockquote>
				</div>
			</section>

			{/* Bottom carousel */}
			<section className={styles.carouselSection} aria-label="Customer reviews carousel">
				<div className={styles.carouselControls}>
					<button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous reviews">‹</button>
					<button type="button" className={styles.navBtn} onClick={next} aria-label="Next reviews">›</button>
				</div>

				{/* scroll-snap container for mobile swipe */}
				<div className={styles.carouselTrack} role="list">
					{visible.map((rev) => (
						<article key={rev.id} className={styles.reviewCard} role="listitem">
							<header className={styles.reviewHead}>
								<div className={styles.reviewerRow}>
									<div className={styles.reviewer}>{rev.name}</div>
									{rev.date && <div className={styles.reviewDate}>{rev.date}</div>}
								</div>
								<Stars count={rev.stars} />
							</header>
							<p className={styles.reviewText}>{rev.text}</p>
						</article>
					))}
				</div>

				<div className={styles.dots} role="tablist" aria-label="Select review">
					{REVIEWS.map((r, i) => (
						<button
							key={r.id}
							type="button"
							className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
							onClick={() => setIndex(i)}
							aria-label={`Show review ${i + 1}`}
							aria-selected={i === index}
							role="tab"
						/>
					))}
				</div>
			</section>

		</main>
	);
}
