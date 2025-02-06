"use server";

import Company from "@/models/companyModel";
import { connectToMongoDB } from "../../db_services/db";

export const addFranchise = async (formData: FormData) => {
    
    const franchise = {
        LOCATION: formData.get("LOCATION"),
        DESCRIPTION: formData.get("DESCRITPION"),
        LINK: formData.get("LINK"),
        IMAGE: formData.get("IMAGE")
    }

    console.log("addFranchise INVOKED, data:\n");
    console.log(franchise);

   
};