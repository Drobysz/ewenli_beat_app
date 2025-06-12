'use client'

// Props/Hooks
import { DetailedHTMLProps, HTMLAttributes, FC, ReactNode, useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

// Context
import { SiteContext } from "../context/site.context";

// Component
import Image from "next/image";
import Link from "next/link";

// Font
import { bagel_fat_one } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

type MenuWindowProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const MenuWindow: FC<MenuWindowProps> = ()=> {
    const { isMenuWindowOpen, setMenuWindow } = useContext(SiteContext);
    const isMore1040 = useMediaQuery({ query: '(min-width: 790px)' });
    const tabs = [
        { href: '/', label: 'Main Page' },
        { href: '/legal_docs', label: 'Legal Docs' },
        { href: '/seller', label: 'About the seller' },
        { href: '/shop', label: 'Shop' },
        { href: '/inventory', label: 'Inventory' },
        { href: '/basket', label: 'Basket' }
    ];

    useEffect(()=> setMenuWindow(false),[isMore1040]);

    return (
        <ul
            className={cn("fixed z-100 min-[790px]:hidden h-[100vh] w-[100vw] bg-white flex flex-col gap-4 justify-center items-center", {
                ['hidden']: isMenuWindowOpen === false,
                ['block']: isMenuWindowOpen === true,
            })}
        >
            
            <Image 
                className="absolute z-110 right-3 top-3 cursor-pointer hover:scale-105 transition-all duration-500"
                src='/cross.svg'
                alt="cross"
                width={50}
                height={50}
                onClick={()=> setMenuWindow(false)}
            />

            {
                tabs.map( tab=> (
                    <Tab key={tab.href} href={tab.href}>
                        {tab.label}
                    </Tab>
                ))
            }
        </ul>
    );
};

const Tab: FC<{children: ReactNode, href: string}> = ({children, href})=> {
    const { setMenuWindow } = useContext(SiteContext);

    return (
        <Link href={href} >
            <li 
                className={cn("text-5xl hover:text-blue hover:font-bold hover:scale-105 active:scale-98 active:text-pinkish transition-all duration-500", bagel_fat_one.className)}
                onClick={()=> setMenuWindow(false)}
            >
                    {children}
            </li>
        </Link>
    );
};