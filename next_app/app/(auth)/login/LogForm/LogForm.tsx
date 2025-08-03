"use client"

// Auth Funcs
import { signup } from "@/app/actions/auth"

// Components
import { DarkForm, AuthBtn } from '@/components/index';

export function LogForm () {

    return (
        <form 
            className="flex flex-col gap-8" 
            action={signup}
        >
            <div className="flex flex-col gap-2 text-white">
                <DarkForm 
                    formType="email" 
                    error={""}
                />
                <DarkForm 
                    formType="password" 
                    error={""}
                />
            </div>
            <AuthBtn 
                className="mb-2" 
                btnType="login"
                type="submit"
            />
        </form>
    );
};