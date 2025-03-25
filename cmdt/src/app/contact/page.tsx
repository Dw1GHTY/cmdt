import FormCard from "@/components/Cards/FormCard";
import ContactUsForm from "@/components/Forms/ContactUsForm";
import React from "react";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Contact Us | Complete Mobile Drug Testing",
    description:
      "Get in touch with Complete Mobile Drug Testing for drug testing, background screening, and fingerprinting services. Fill out our contact form today!",
    openGraph: {
      siteName: "Complete Mobile Drug Testing",
      type: "website",
      title: "Contact Us | Complete Mobile Drug Testing",
      description:
        "Reach out to CMDT for professional drug testing and background screening services. Our team is ready to assist you.",
      url: "https://cmdt.vercel.app/contact",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
};

const page = () => {
  return (
    <div className="flex size-full justify-center items-center bg-white">
      <div className="flex  size-fit mt-28">
        <FormCard
          title="Contact Us"
          footer="After submiting we will get back to you as soon as possible!"
        >
          <ContactUsForm />
        </FormCard>
      </div>
    </div>
  );
};

export default page;
