import BulletArticle from "@/components/Content/BulletArticle";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <section className="mt-28 text-black font-sans">
        <BulletArticle
          menus={[
            { text: "Established 2011" },
            { text: "CWOB: Certified Women Owned Business" },
            { text: "Member of DATIA: Drug & Alcohol Testing Association" },
          ]}
        />
        <BulletArticle
          menus={[
            { text: "DUNS: 968800016" },
            { text: "Cage: 6K7D1" },
            {
              text: "NAICS CODES: 541380, 541611, 621511, 541990, 624999, 621999",
            },
          ]}
        />
        <BulletArticle
          menus={[
            {
              text: "Comprehensive DOT & Non-DOT Drug Testing",
              submenu: [
                { text: "Random" },
                { text: "Pre-Employment" },
                { text: "Post Accident" },
                { text: "Reasonable Suspicion" },
              ],
            },
          ]}
        />
      </section>
    </div>
  );
};

export default page;
