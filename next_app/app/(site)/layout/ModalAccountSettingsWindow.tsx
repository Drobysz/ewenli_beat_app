"use client"

// Hooks
import { useContext } from "react";

// Context
import { SiteContext } from "@/app/(site)/context/site.context";

// Components
import Image from "next/image";
import { AccountDataForm } from "@/components/index";

// Fonts
import { impact, doppelganger, bagel_fat_one } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

// Helpers
import { logoutClient } from "@/app/actions/auth";

export const ModalAccountSettingsWindow = ()=> {
    // State of the modal window
    const { isModalWindowOpen, setModalWindow, sessionData } = useContext(SiteContext);

    if (!sessionData?.token) {
        return null;
    }

    return (
        <div
            className={cn('flex flex-col gap-6 z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[420px] h-fit backdrop-blur-xl bg-gray-300/10 py-11 px-10 rounded-3xl border-1 border-zinc-700', {
                ['hidden']: !isModalWindowOpen,
                ['fixed']: isModalWindowOpen
            })}
        >
            {/* Cross image */}
            <Image 
                className="absolute right-3 top-3 cursor-pointer hover:scale-105 transition-all duration-500"
                src='/cross.svg'
                alt="cross"
                width={32}
                height={32}
                onClick={()=> setModalWindow(false)}
            />

            <h1 className={cn("text-center text-white/70 text-5xl", bagel_fat_one.className)}>
                Account data
            </h1>

            <div className="flex flex-col ite gap-10 h-fit">
                <AccountDataForm formType="email"/>
                <AccountDataForm formType="name"/>
                <AccountDataForm formType="password"/>
            </div>
            
            <form 
                className="grid grid-cols-[1fr_auto] gap-2"
                action={logoutClient}
            >
                <h2 className={cn("text-white/40 text-xl", doppelganger.className)}>Do you want to log out? Press this button</h2>
                <input type="hidden" name="token" value={sessionData.token} />
                <button
                    className={cn("cursor-pointer border-2 border-red-proj text-red-proj rounded-xl px-3 py-1.5 w-full active:scale-96 hover:scale-x-105 hover:scale-y-102 hover:border-red-burgundy hover:text-red-burgundy transition-all duration-300", impact.className)}
                    type="submit"
                >
                    Log out
                </button>
            </form>
            
        </div>
    )
};