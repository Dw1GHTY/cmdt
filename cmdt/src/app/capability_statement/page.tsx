import ContentCard from "@/components/Cards/ContentCard";
import BulletArticle from "@/components/Content/BulletArticle";
import React from "react";

const page = () => {
  return (
    <div
      className="
    flex justify-center items-center font-sans 
    bg-gradient-to-br from-slate-200 via-blue-400 to-white size-full"
    >
      <section
        className="
      flex flex-row justify-center items-center flex-wrap
      w-full md:w-2/3 border-x-2 border-dotted border-white mt-28"
      >
        <h2 className="text-center text-6xl text-blue-900 font-semibold italic mb-4">
          Capability Statement
        </h2>
        <ContentCard cardTitle="Certifications">
          <BulletArticle
            menus={[
              { text: "Established 2011" },
              { text: "CWOB: Certified Women Owned Business" },
              { text: "Member of DATIA: Drug & Alcohol Testing Association" },
            ]}
          />
        </ContentCard>
        <ContentCard cardTitle="Testing">
          <BulletArticle
            menus={[
              { text: "Hair Follicle Testing" },
              { text: "Breath Alcohol Testing" },
              { text: "DNA Testing" },
              { text: "Saliva Testing" },
              { text: "Breath Alcohol Testing" },
              { text: "Fingerprinting" },
              { text: "Steroid Testing" },
              { text: "Consortium Management" },
            ]}
          />
        </ContentCard>
        <ContentCard cardTitle="Background Searches">
          <BulletArticle
            menus={[
              { text: "Credit Report" },
              { text: "Criminal History" },
              { text: "State and County Search" },
              { text: "Federal Criminal Records Search" },
              { text: "International Criminal Records" },
              { text: "Sexual Offender (Nationwide)" },
              { text: "Social Security Number (SSN) Verification" },
              { text: "Address Trace" },
              { text: "Tribal Search" },
              { text: "Driving History" },
              { text: "Professional License" },
            ]}
          />
        </ContentCard>
        <ContentCard cardTitle="Partners">
          <BulletArticle
            menus={[
              { text: "Wal-Mart" },
              { text: "GE Health Care" },
              { text: "UPS" },
              { text: "Miller Park" },
              { text: "Menards" },
              { text: "Johnson Controls" },
              { text: "US Coast Guards" },
              { text: "American Eagle Airlines" },
              { text: "Froedert Medical Systems" },
              { text: "US Cellular" },
              { text: "Office Max" },
              { text: "ALDI" },
              { text: "Coach Bus Line" },
            ]}
          />
        </ContentCard>
        <ContentCard cardTitle="We...">
          <BulletArticle
            menus={[
              { text: "Offer Mobile Testing 24/7" },
              { text: "Online and Paperless Chain of Custody" },
              {
                text: "Streamlined Collection Process (Paper and Electronic Format)",
              },
            ]}
          />
          <BulletArticle
            menus={[
              { text: "24/7 Web-Based Data Entry Access" },
              { text: "Accessible Through Any Wi-Fi Device" },
            ]}
          />
        </ContentCard>
      </section>
    </div>
  );
};

export default page;
