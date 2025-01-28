import InfoArticle from "@/components/Content/InfoArticle";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full my-1">
      <InfoArticle
        paragraphs={[
          {
            title: "About us",
            text: "Your Premier Source for 24/7 Mobile Drug Testing, Background Checks, DNA/Paternity Testing and Fingerprinting[/fancyheading] Established in 2011, Complete Mobile Drug Testing has become a trusted provider of drug testing, pre-employment background screening and paternity testing for businesses, courts and families in Milwaukee, Wisconsin and surrounding areas.",
          },
          {
            text: "DOT Compliant Pre-Employment, Random and Post-Accident Drug Testing. 24/7 Mobile Testing.",
          },
          {
            text: "Customized Background Screening Solutions with 24/7 Web-Based Application for Ordering, Tracking and Receiving Background Check Data.",
          },
          {
            text: "Legal, Personal and Immigration DNA and Paternity Testing.",
          },
          {
            text: "NATA/NFCC Compliant Fingerprinting by Trained and Certified Technicians (FBI Database).",
          },
        ]}
      />
    </div>
  );
};

export default AboutUs;
