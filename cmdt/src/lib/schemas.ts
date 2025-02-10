import { z } from "zod";

export const franchiseSchema = z.object({
  LOCATION: z.string().min(2).max(50),
  DESCRIPTION: z.string().min(2).max(50),
  LINK: z.string().min(2).max(50),
  IMAGE: z.string().optional(),
});