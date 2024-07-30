import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be 10 char" })
    .max(500, { message: "Content no longer 500 char" }),
});
