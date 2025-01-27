import mongoose, { Model, ObjectId } from "mongoose";

export interface ICompany {
  LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  _id?: ObjectId;
}

export interface ICompanyDocument extends ICompany, Document {
    LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  _id?: ObjectId;
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
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

const Company: Model<ICompanyDocument> =
  mongoose.models?.Company|| mongoose.model("Company", companySchema);

export default Company;
