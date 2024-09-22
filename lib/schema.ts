import { z } from "zod";

export const FormDataSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    teammates: z
      .array(
        z.object({
          email: z
            .string()
            .email("Invalid email address")
            .optional()
            .or(z.literal("")),
        })
      )
      .optional()
      .default([])
      .transform((arr) =>
        arr.filter((item) => item.email && item.email.trim() !== "")
      ),
    socials: z
      .object({
        twitter: z.string().url("Invalid URL").optional().or(z.literal("")),
        facebook: z.string().url("Invalid URL").optional().or(z.literal("")),
        linkedin: z.string().url("Invalid URL").optional().or(z.literal("")),
      })
      .optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type FormData = z.infer<typeof FormDataSchema>;
