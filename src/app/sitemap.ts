import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base =
		process.env.NEXT_PUBLIC_SITE_URL || "https://car-detailing-rouge.vercel.app";

	const lastMod = new Date();

	return [
		{ url: `${base}/`, lastModified: lastMod, changeFrequency: "weekly", priority: 1 },
		{ url: `${base}/services`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/pricing`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.8 },
		{ url: `${base}/gallery`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${base}/testimonials`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.7 },
		{ url: `${base}/about`, lastModified: lastMod, changeFrequency: "yearly", priority: 0.5 },
		{ url: `${base}/contact`, lastModified: lastMod, changeFrequency: "monthly", priority: 0.9 },
	];
}
