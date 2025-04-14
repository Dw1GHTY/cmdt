import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cmdt.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // ! not finished{
    //   url: "https://cmdt.vercel.app/franchise",
    //   lastModified: new Date(),
    //   changeFrequency: "weekly",
    //   priority: 0.9,
    // },
    {
      url: "https://cmdt.vercel.app/drug_testing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cmdt.vercel.app/dna_paternity_testing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cmdt.vercel.app/background_screening",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cmdt.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
    },
    {
      url: "https://cmdt.vercel.app/capability_statement",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
