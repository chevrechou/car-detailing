import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const base =
		process.env.NEXT_PUBLIC_SITE_URL || "https://car-detailing-rouge.vercel.app";

	const isPreview = base.includes(".vercel.app");

	return {
		rules: [
			{
				userAgent: "*",
				allow: isPreview ? [] : ["/"],
				disallow: isPreview ? ["/"] : [],
			},
		],
		sitemap: isPreview ? undefined : `${base}/sitemap.xml`,
	};
}
