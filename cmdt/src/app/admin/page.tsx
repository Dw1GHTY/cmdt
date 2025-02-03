import BasicDialog from "@/components/Dialog/BasicDialog";
import CreateCompanyForm from "@/components/Forms/CreateCompanyForm";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full bg-slate-950 text-white justify-center items-center">
      <BasicDialog triggerName="Add a new Franchise">
        <CreateCompanyForm />
      </BasicDialog>
    </div>
  );
};

export default page;
