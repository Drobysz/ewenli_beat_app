import { z } from "zod";

export const RegisterFormScheme = z.object({
    name: z
        .string()
        .min(4, "Be at least 4 characters")
        .trim(),
    email: z
        .string()
        .min(5, { message: "Your email is incorrect" })
        .trim(),
    password: z
        .string()
        .min(5, { message: "Be at least 5 characters" })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim(),
    password_confirmation: z
        .string()
        .min(5, { message: "Be at least 5 characters" })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim()
});

export type FormState =
    {
        errors?: {
            name?: string
            email?: string
            password?: string
            password_confirmation?: string
        }
        message?: string
    }