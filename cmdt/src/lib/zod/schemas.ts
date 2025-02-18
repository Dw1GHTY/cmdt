import { z } from "zod";

export const franchiseSchema = z.object({
  LOCATION: z.string().min(2).max(50),
  DESCRIPTION: z.string().min(2).max(50),
  LINK: z.string().min(2).max(50),
  IMAGE: z.string().optional(),
});

export const contactUsSchema = z.object({
  firstName: z.string().max(50),
  lastName: z.string().max(50),
  company: z.string().max(100),
  email: z.string().email({ message: "Invalid email format" }),
  phoneNumber: z.string().min(5).max(20),
  specificProduct: z.string().max(100),
  industry: z.string().max(20), //! industry should be a dropdown of given values
  additionalMessage: z.string().max(1000),
});
