import BulletArticle from "@/components/Content/BulletArticle";
import InfoArticle from "@/components/Content/InfoArticle";
import PageTitlePicture from "@/components/Content/PageTitlePicture";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Background Screening | Complete Mobile Drug Testing",
    description:
      "Comprehensive pre-employment background screening services, including criminal history checks, employment verification, driving records, and more.",
    openGraph: {
      siteName: "Complete Mobile Drug Testing",
      type: "website",
      title: "Background Screening | Complete Mobile Drug Testing",
      description:
        "CMD provides reliable background checks, including nationwide criminal history, employment verification, credit reports, and driving records to help businesses make informed hiring decisions.",
      images: "https://cmdt.vercel.app/background-check.jpg",
      url: "https://cmdt.vercel.app/background_screening",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white size-full">
      <PageTitlePicture
        imagePath="/background-check.jpg"
        imageAlt="Pre-employment background check"
        title="Background Screening"
        description="Pre-employment screening or background checks"
      />
      <InfoArticle
        title="Pre-Employment Screening & Background Checks"
        paragraphs={[
          {
            text: "CMD will work directly with your organization to develop an effective screening program that addresses your unique needs. We deliver the best and most reliable background checks and have the flexibility to adapt to your changing needs over time.",
          },
          {
            component: (
              <BulletArticle
                title="CMD customizes screening solutions using an electronic platform that can meet all of your needs and can include any combination of the following pre-employment screening and background check services:"
                menus={[
                  {
                    text: "Nationwide Criminal History – includes all 50 states",
                  },
                  { text: "Federal Criminal Records Search" },
                  { text: "International Criminal Records Search" },
                  { text: "Nationwide – Sexual Offender" },
                  { text: "Social Security Number Verification" },
                  { text: "Address Trace" },
                  { text: "Tribal Search" },
                  { text: "State and County Search – Individually" },
                  { text: "Employment / Academic Verification" },
                  { text: "Credit Report – TransUnion" },
                  {
                    text: "Driving History – State Motor Vehicle and / or CDL Violations",
                  },
                  {
                    text: "Worker’s Compensation History – Where allowed by Law",
                  },
                  { text: "Professional License" },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
};

export default page;
