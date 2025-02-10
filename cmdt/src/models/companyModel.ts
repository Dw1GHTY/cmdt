import mongoose, { Model, ObjectId } from "mongoose";

export interface ICompany {
  LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  IMAGE: string;
}

export interface ICompanyDocument extends ICompany, Document {
  _id: ObjectId; // MongoDB auto-generates this, so no need to make it required manually
}

const companySchema = new mongoose.Schema<ICompanyDocument>(
  {
    LOCATION: {
      type: String,
      required: true,
    },
    DESCRIPTION: {
      type: String,
      required: true,
    },
    LINK: {
      type: String,
      required: true,
    },
    IMAGE: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds `createdAt` and `updatedAt` fields
  }
);

const Company: Model<ICompanyDocument> =
  mongoose.models?.Company || mongoose.model("Company", companySchema);

export default Company;
