import FormCard from "@/components/Cards/FormCard";
import ContactUsForm from "@/components/Forms/ContactUsForm";
import React from "react";

const page = () => {
  return (
    <div className="flex size-full justify-center items-center bg-white">
      <div className="flex  size-fit mt-28">
        <FormCard
          title="Contact Us Form"
          footer="After submiting we will get back at you as soon as possible!"
        >
          <ContactUsForm />
        </FormCard>
      </div>
    </div>
  );
};

export default page;
