// Components
import Image from "next/image";
import { SocialAuthBtn, BackBtn } from '@/components/index';
import Link from "next/link";

// Form 
import { LogForm } from "./LogForm/LogForm"

// Font
import { fs163, avenir } from '@/fonts/fonts';

// Deps
import cn from 'classnames';

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.login.title,
    description: metaData.login.description,
  };
};

export default function LoginPage() {
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

            <LogForm />

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