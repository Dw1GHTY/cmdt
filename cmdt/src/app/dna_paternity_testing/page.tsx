import BulletArticle from "@/components/Content/BulletArticle";
import InfoArticle from "@/components/Content/InfoArticle";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white size-full">
      {/* //! Big image instead of Separator tag */}
      <Separator className="mt-28 h-2" />
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
