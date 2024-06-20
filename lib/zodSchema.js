import { z } from "zod";

export const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Must be 2 or more characters long" })
    .max(50)
    .trim(),
  password: z
    .string()
    .min(1, { message: "Must be 1 or more characters long" })
    .max(50),
});

export const userSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Must be 2 or more characters long" })
    .max(50)
    .trim(),
  password: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" })
    .max(50),
  role: z.enum(["admin", "user", "tehnician", "facturare", "dispecerat"]),
});
