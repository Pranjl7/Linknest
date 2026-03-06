import { z } from "zod";

export const Userzodschema = z.object({
  username: z
    .string()
    .min(2, { message: "Minimum Two letters are required for username." })
    .max(10, { message: "Maximum Ten letters are required for username." }),
  password: z
    .string()
    .min(8, {
      message: "Minimum Eight letters are required for a strong password.",
    })
    .max(20, { message: "Maximum Ten letters are required for passowrd." }),
});

export const Contentzodschema = z.object({
  link: z.string(),
  type: z.string(),
  title: z
    .string()
    .min(5, { message: "Title should be Minimum of Five letters." }),
  tags: z.array(z.string()).max(3, { message: "Max Three tags are allowed." }),
});

export type typeofUZS = z.infer<typeof Userzodschema>;
export type typeofCZS = z.infer<typeof Contentzodschema>;
