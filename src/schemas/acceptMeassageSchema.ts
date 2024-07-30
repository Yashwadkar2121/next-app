import { z } from "zod";

export const acceptMeassageSchema = z.object({
  acceptMeassages: z.boolean(),
});
