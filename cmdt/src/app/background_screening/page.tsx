import BulletArticle from "@/components/Content/BulletArticle";
import InfoArticle from "@/components/Content/InfoArticle";
import PageTitlePicture from "@/components/Content/PageTitlePicture";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white size-full">
      {/* //! Big image instead of Separator tag */}
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
