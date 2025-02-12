import mongoose, { Model, ObjectId } from "mongoose";

export interface IFranchise {
  LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  IMAGE: string;
}

export interface IFranchiseDocument extends IFranchise, Document {
  _id: ObjectId; // MongoDB auto-generates this, so no need to make it required manually
}

const franchiseSchema = new mongoose.Schema<IFranchiseDocument>(
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

const Franchise: Model<IFranchiseDocument> =
  mongoose.models?.Franchise || mongoose.model("Franchise", franchiseSchema);

export default Franchise;
