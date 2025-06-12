'use client'

// Props/Hooks
import { useContext, useState } from "react";

// Fonts
import { climate_crisis } from "@/fonts/fonts";

// Components
import { CustomBtn } from "@/components/Btn/CustomBtn";
import Image from "next/image";

// Dependencies
import cn from 'classnames';

// Context
import { AppContext } from "@/app/context/app.context";
import { SiteContext } from "@/app/(site)/context/site.context";

export const AccountElement = () => {
    // Global app context
    const { name, token } = useContext(AppContext);
    // Site group context
    const { setModalWindow, setMenuWindow } = useContext(SiteContext);

    // Hover state
    const [ isHovered, setHover ] = useState<boolean>(false);

    return (
        token
        ?
            <div className="flex gap-4">
                <div 
                    className="rounded-full h-[52px] bg-[#2B2A2A]/80 flex items-center cursor-pointer gap-3 text-pinkish hover:scale-98 hover:ring-2 hover:ring-link-blue hover:drop-shadow-link-blue hover:drop-shadow-[0px_0px_10px] hover:text-link-blue transition-all duration-300 max-[1040px]:bg-transparent"
                    onClick={ ()=> setModalWindow(true) }
                    onMouseEnter={ ()=> setHover(true) }
                    onMouseLeave={ ()=> setHover(false) }
                >
                    <Image 
                        src={ isHovered ? '/user-logo_hovered.png' : '/user_logo.png' }
                        width={52}
                        height={52}
                        alt="user"
                    />

                    <h2 className={cn("text-xl mr-4 max-[1040px]:hidden", climate_crisis.className)}>{name}</h2>
                </div>

                <Image 
                    src='/Menu.svg'
                    width={40}
                    height={40}
                    alt="menu"
                    className="min-[790px]:hidden hover:scale-110 transition-all duration-500 active:scale-100"
                    onClick={()=> setMenuWindow(true)}
                />
            </div>
            
        :
            <CustomBtn
                color="blue"
                link="/login"
            >
                Login
            </CustomBtn>
    )
};