'use client'

// Components
import Image from "next/image";
import { DarkForm, SocialAuthBtn, AuthBtn, BackBtn } from '@/components/index';
import Link from "next/link";

// Font
import { fs163, avenir } from '@/fonts/fonts';

// Deps
import cn from 'classnames';

// Context 
import { AuthContext } from "../context/auth.context";
import { AppContext } from "@/app/context/app.context";

// Hooks/Props
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

// Props
import { UserLog } from "@/interfaces/UserData.interface";

// Helpers
import { login } from "@/helpers/authenfication";

export function LoginView() {
    // Router
    const router = useRouter();
    // Environment variables
    const { setEmail, setName, setToken } = useContext(AppContext);
    // Input form data
    const { authData } = useContext(AuthContext);
    // Error message
    const [ error, setError ] = useState('');

    // Request to the API
    const handleSubmit = async () => {
        const res = await login(authData.email, authData.password);
        const data: UserLog = await res.json();
        console.log(data)

        if (res.ok){
            if (!data.message){
                sessionStorage.setItem('token', data.token);
                sessionStorage.setItem('name', data.user.name);
                sessionStorage.setItem('email', data.user.email);

                setToken(data.token);
                setName(data.user.name);
                setEmail(data.user.email);
                
                router.push('/');
            } else {
                setError(data.message);
            }
        } else {
            setError('This email already exists or it is incorrect')
        }

    }

    return (
        <div 
            className="h-fit w-full backdrop-blur-xl bg-link-blue/10 overflow-hidden pt-5 pb-4 px-5 rounded-3xl border-1 border-zinc-700"
        >
            <BackBtn className="absolute top-3 left-4 w-[100px]"/>
            
            <div className="w-full flex justify-center mb-6">
                <Image 
                    width={90} 
                    height={90} 
                    src="/logo.png" 
                    alt="#logo"
                    className="bg-transparent"
                />
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
                <SocialAuthBtn btnType="google"/>
                <SocialAuthBtn btnType="github"/>
            </div>

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 mb-2">
                <div className="h-[2px] w-full bg-gray-200/50"/>
                <span className="text-zinc-400">OR</span>
                <div className="h-[2px] w-full bg-gray-200/50"/>
            </div>

            <form className="flex flex-col gap-2 text-white mb-8">
                <DarkForm formType="email" error={error}/>
                <DarkForm formType="password" error={error}/>
            </form>
            
            <AuthBtn 
                className="mb-2" 
                btnType="login"
                onClick={handleSubmit}
            />

            <p className={cn(avenir.className, "text-center text-md text-white")}>
                If you are not registered yet, there is a 
                <Link href={'/register'}>
                    <span 
                        className={cn(fs163.className, "text-base text-link-blue hover:text-blue transition-all duration-300 ease-in-out px-1.5")}
                    >
                        link
                    </span>
                </Link>
                for you
            </p>
        </div>
    );
};