import { ObjectId } from "mongoose";

export type TFranchise = {
  LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  IMAGE: string;
  _id?: ObjectId;
};
