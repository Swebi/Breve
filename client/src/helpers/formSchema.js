import { z } from "zod";

export const formSchema = z.object({
  fullUrl: z.string().url(),
});
