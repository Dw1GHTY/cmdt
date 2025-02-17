import mongoose, { Model, ObjectId, Document } from "mongoose";

export interface IContactUs {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phoneNumber: string;
  specificProduct: string;
  industry: string;
  additionalMessage: string;
}

export interface IContactUsDocument extends IContactUs, Document {
  _id: ObjectId;
}

const contactUsSchema = new mongoose.Schema<IContactUsDocument>(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 50,
    },
    company: {
      type: String,
      required: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 20,
    },
    specificProduct: {
      type: String,
      required: true,
      maxlength: 100,
    },
    industry: {
      type: String,
      required: true,
      maxlength: 20,
    },
    additionalMessage: {
      type: String,
      required: true,
      maxlength: 1000,
    },
  },
  {
    timestamps: true, // ?Adds `createdAt` and `updatedAt` fields
  }
);

const ContactUs: Model<IContactUsDocument> =
  mongoose.models?.ContactUs || mongoose.model("ContactUs", contactUsSchema);

export default ContactUs;
