"use client"

// Auth Funcs
import { register } from "@/app/actions/auth"

// Components
import { DarkForm, AuthBtn } from '@/components/index';

// Hooks
import { useActionState } from "react";

// Props
import { FormState } from "@/helpers/RegisterFormScheme";

export function RegForm () {
    const [state, action, pending] = 
        useActionState<FormState, FormData>(
            register, 
            { errors: {} }
        );
    
    return (
        <form 
            className="flex flex-col gap-8"
            action={action}
        >
            <div className="flex flex-col gap-2 text-white">
                <DarkForm 
                    formType="name" 
                    error={state?.errors?.name ?? ""}
                />
                <DarkForm 
                    formType="email" 
                    error={state?.errors?.email ?? ""}
                />
                <DarkForm 
                    formType="password" 
                    error={state?.errors?.password ?? ""}
                />
                <DarkForm 
                    formType="password_confirmation" 
                    error={state?.errors?.password_confirmation ?? ""}
                />
            </div>
            <AuthBtn 
                className="mb-2"
                btnType="register"
                disabled={pending}
                type="submit"
            />
        </form>
    );
};