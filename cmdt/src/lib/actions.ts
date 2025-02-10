"use server";

import Company from "@/models/companyModel";
import { connectToMongoDB } from "../../db_services/db";

export const addFranchise = async (formData: FormData) => {
  await connectToMongoDB(); // Ensure MongoDB connection

  const franchise = {
    LOCATION: formData.get("LOCATION") as string,
    DESCRIPTION: formData.get("DESCRIPTION") as string, // Fix typo
    LINK: formData.get("LINK") as string,
    IMAGE: formData.get("IMAGE") as string, // Base64 image or URL
  };

  console.log("addFranchise INVOKED, data:\n", franchise);

  try {
    const newFranchise = new Company(franchise);
    await newFranchise.save();
    console.log("Franchise added successfully!");

    return { success: true, message: "Franchise added successfully!" };
  } catch (error) {
    console.error("Error saving franchise:", error);
    return { success: false, message: "Error adding franchise." };
  }
};
