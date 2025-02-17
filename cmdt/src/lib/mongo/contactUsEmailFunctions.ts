import ContactUs, { IContactUs } from "@/models/contactUsModel";
import { connectToMongoDB } from "../../../db_services/db";

export async function saveContactUsData(data: IContactUs) {
  await connectToMongoDB();
  const contactEntry = new ContactUs(data);
  return contactEntry.save();
}
