import BulletArticle from "@/components/Content/BulletArticle";
import InfoArticle from "@/components/Content/InfoArticle";
import PageTitlePicture from "@/components/Content/PageTitlePicture";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "DNA Paternity Testing | Complete Mobile Drug Testing",
    description:
      "Accurate and court-admissible DNA paternity testing to establish biological relationships. We offer legal, personal, and immigration DNA testing.",
    openGraph: {
      siteName: "Complete Mobile Drug Testing",
      type: "website",
      title: "DNA Paternity Testing | Complete Mobile Drug Testing",
      description:
        "Our DNA paternity tests provide definitive proof of biological relationships. Legal DNA testing is admissible in court for child support, immigration, and other legal purposes.",
      images: "https://cmdt.vercel.app/dna-test.jpg",
      url: "https://cmdt.vercel.app/dna_paternity_testing",
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
        imagePath="/dna-test.jpg"
        imageAlt="A picture of a woman looking through a microscope"
        title="DNA Paternity Testing"
        description="A definitive proof of a biological relationship"
      />
      <InfoArticle
        title="DNA & Paternity Testing"
        paragraphs={[
          {
            text: "DNA paternity testing determines the biological father of a child. We all inherit our DNA from our biological parents – half from our mother, and half from our father. A DNA paternity test compares a child’s DNA pattern with that of an “alleged father” to determine if there is a match. When performed correctly in an experienced laboratory, it’s the most definitive proof of a biological relationship.",
          },
          {
            text: "Legal DNA Paternity Test results are admissible in a court of law. Our laboratory adheres to the most stringent standards for testing; some states may differ in their requirements. A Legal DNA Paternity Test tracks your DNA samples from the time they’re collected by one of our trained specialists until the time they arrive in our DNA testing laboratory. That ensures they’re admissible as evidence in a courtroom.",
          },
        ]}
      />
      <InfoArticle
        title="Legal Paternity Test"
        paragraphs={[
          {
            component: (
              <BulletArticle
                title="If you need paternity test results that can be used as a legal document, then a Legal DNA Test must be performed. Common legal reasons that this test is used:"
                menus={[
                  { text: "Child Support" },
                  { text: "Adoption" },
                  { text: "Birth Certificate" },
                  { text: "Immigration" },
                  { text: "Court Order" },
                  { text: "Will/Estate" },
                  { text: "Child Custody" },
                  { text: "Tax Forms" },
                  { text: "Other Legal Reasons" },
                ]}
              />
            ),
          },
          {
            component: (
              <BulletArticle
                title="Our DNA Tests"
                menus={[
                  { text: "Personal DNA Paternity Testing" },
                  { text: "Legal DNA Paternity Testing" },
                  { text: "Immigration DNA Paternity Testing" },
                  { text: "Half/Full Sibling DNA Test" },
                  { text: "Single/Duo Grand-parentage DNA Test" },
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
