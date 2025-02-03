import { ObjectId } from "mongoose";

export type TCompany = {
  LOCATION: string;
  DESCRIPTION: string;
  LINK: string;
  _id?: ObjectId;
};
