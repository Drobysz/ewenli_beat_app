"use server"

// Props
import { UserLog, UserReg } from "@/interfaces/UserData.interface";

// Helpers
import { logInQuery, regQuery, logOutQuery } from "@/helpers/authRequest";
import { createSession, deleteSession } from "./sesssions";

// FormScheme
import { RegisterFormScheme, FormState } from "@/helpers/RegisterFormScheme";

// Navigation
import { redirect } from "next/navigation";

export async function signup (formData: FormData) {
    const data: UserLog = await logInQuery(
        formData.get("email") as string, 
        formData.get("password") as string, 
    );

    if (!("token" in data)) {
        redirect("/login");
    }
    console.log(data)

    await createSession(
        data.token, 
        data.user.name, 
        data.user.email
    );

    redirect("/");
};

export async function register (state: FormState, formData: FormData) {
    const validatedeData = RegisterFormScheme.safeParse({
        name:                  formData.get("name"),
        email:                 formData.get("email"),
        password:              formData.get("password"),
        password_confirmation: formData.get("password_confirmation"),
    });

    if (!validatedeData.success) {
        const flat = validatedeData.error.flatten().fieldErrors;
        return {
            errors: {
                name:                  flat.name?.[0] ?? "",
                email:                 flat.email?.[0] ?? "",
                password:              flat.password?.[0] ?? "",
                password_confirmation: flat.password_confirmation?.[0] ?? ""
            }
        }
    }

    const data: UserReg = await regQuery(
        formData.get("name") as string, 
        formData.get("email") as string, 
        formData.get("password") as string,
        formData.get("password_confirmation") as string
    );

    if (!("token" in data)) {
        redirect("/register");
    }
    
    await createSession(
        data.token, 
        data.user.name, 
        data.user.email
    );

    redirect("/");
};

export async function logoutClient (formData: FormData) {
    const token = formData.get('token') as string;
    await logout(token);
}

export async function logoutServer (token: string) {
    await logout(token);
}

export async function logout (token: string) {
    const res = await logOutQuery(token);
    if (res.status === 200) {
        await deleteSession();
        redirect('/login');
    }
}