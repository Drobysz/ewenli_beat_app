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

// Hooks
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

// Helpers
import { register } from "@/helpers/authenfication";

// Props
import { UserReg } from "@/interfaces/UserData.interface";

export default function Page() {
    // Rotuer
    const router = useRouter();
    // Error message
    const [ error, setError ] = useState('');
    // Input form data
    const { authData } = useContext(AuthContext);
    const { setEmail, setName, setToken } = useContext(AppContext);

    // Request to the API
    const handleSubmit = async () => {
        const res = await register(authData.name, authData.email, authData.password, authData.password_confirmation);
        const data: UserReg = await res.json();

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
            setError('Your credentials are incorrect')
        }

    }

    return (
        <div 
            className="h-fit w-full backdrop-blur-xl bg-link-blue/10 overflow-hidden pt-5 pb-3 px-5 rounded-3xl border-1 border-zinc-700"
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

            <form className="flex flex-col gap-3 text-white mb-8">
                <DarkForm formType="name" error={error}/>
                <DarkForm formType="email" error={error}/>
                <DarkForm formType="password" error={error}/>
                <DarkForm formType="password_confirmation" error={error}/>
            </form>

            <AuthBtn 
                className="mb-2"
                btnType="register"
                onClick={()=> handleSubmit()}
            />

            <p className={cn(avenir.className, "text-center text-md text-white")}>
                If you are already registered, there is a 
                <Link href={'/login'}>
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