"use client"

// Props
import { FC, ChangeEvent } from "react";
import { DarkFormProps } from "./DarkForm.props";

// Hooks
import { useContext } from "react";

// Context
import { AuthContext } from "@/app/(auth)/context/auth.context";
import { AuthData } from "@/interfaces/AuthData.interface";

export const DarkForm: FC<DarkFormProps> = ({formType, error}) => {
    const { setAuthData, authData } = useContext(AuthContext);

    const placeholders: Record<DarkFormProps['formType'], string> = {
        name:                  'mega_awesome_nickname123',
        email:                 'Email',
        password:              '••••••••••••',
        password_confirmation: 'confirm your password',
    };
    const formTypeLib: Record<DarkFormProps['formType'], string> = {
        name:                  'text',
        email:                 'email',
        password:              'password',
        password_confirmation: 'password',
    };

    const handleForm = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setAuthData({
            ...authData,
            [name as keyof AuthData]: value
        });
    };
    
    return (
        <label 
            htmlFor={formType}
            className="flex flex-col gap-0.5"
        >
            <div className="flex gap-2 items-center">
                <span className="pl-2 text-lg text-zinc-400">
                    {
                        formType === 'password_confirmation' ? 'confirm password' : formType
                    }
                </span>

                {error && <span className="text-red-proj text-md">{error}</span>}
            </div>
            
            <input 
                id={formType} 
                type={ formTypeLib[formType] } 
                className="rounded-xl border border-zinc-700 bg-zinc-900/70 px-3 py-2 placeholder-zinc-500 ring-1 ring-transparent transition-shadow focus:outline-0 focus:ring-blue-700" 
                name={formType} 
                autoComplete="on"
                placeholder={placeholders[formType]}
                onChange={(e)=> handleForm(e)}
            />
        </label>
    );
};