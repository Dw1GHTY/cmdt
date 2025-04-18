import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
    {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/email/contact"]
    },
  ],
    sitemap: "https://cmdt.vercel.app/sitemap.xml",
  };
}
