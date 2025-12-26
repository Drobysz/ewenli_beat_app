'use client'

// Hooks
import React, { FC, useRef, useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { useWindowWidth } from "@/hooks/useWindowWidth";

// framer-motion
import { motion } from "framer-motion";

// Props
import { CursorPosition, CursorProps, Tabprops } from "./Navbar.props";

// Dependencies
import cn from 'classnames';

// Fonts
import { avenir } from "@/fonts/fonts";

// Components
import Link from "next/link";

// Context
import { SiteContext } from "@/app/context/site.context";

export const NavBar = () => {
    const { sessionData } = useContext(SiteContext);

    // List of tabs
    const baseTabs = [
        { href: '/',       label: 'main page' },
        { href: '/seller', label: 'about the seller' },
        { href: '/shop',   label: 'shop' },
    ];
    const authTabs = [
        { href: '/inventory', label: 'inventory' },
        // { href: '/basket',    label: 'basket' },
    ];

    const tabs = sessionData !== undefined ? [...baseTabs, ...authTabs] : baseTabs;
    const pathname = usePathname();

    const defaultCoord = { left:0, width: 0 };

    // Postition states
    const [position, setPosition] = useState<CursorPosition>(defaultCoord);
    const [positionClicked, setPositionClicked] = useState<CursorPosition>(defaultCoord);

    return (
        <ul
            onMouseLeave={() => setPosition(positionClicked)}
            className="relative mx-auto flex w-fit rounded-full bg-[#212020] p-1 max-[790px]:hidden"
        >
            {
                tabs.map((tab) => (
                    <Tab
                        key={tab.href}
                        href={tab.href}
                        isActive={pathname === tab.href}
                        setPosition={setPosition}
                        setPositionClicked={setPositionClicked}
                    >
                        {tab.label}
                    </Tab>
                ))
            }

            <Cursor position={position} />
        </ul>
    );
};

const Tab: FC<Tabprops> = ({ children, isActive, href, setPosition, setPositionClicked }) => {
    const ref = useRef<HTMLLIElement>(null!);
    const windowWidth = useWindowWidth();
    const isWindowLess1040 = windowWidth <= 1040;

    useEffect(() => {
        if (isActive) {
            const { offsetLeft: left, offsetWidth: width } = ref.current;
            setPositionClicked({ left, width });
            setPosition({ left, width });
        }
    }, [isWindowLess1040]);

    const handleInteraction = (interaction: 'hover' | 'click')=> {
        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;

        const coord = { left, width };

        switch (interaction) {
            case 'click':
                setPositionClicked(coord);
                break;
        
            case 'hover':
                setPosition(coord);
                break;
        }
    };
        
    return (
        <Link href={href}>
            <li
                ref={ref}
                onClick={()=> handleInteraction('click')}
                onMouseEnter={()=> handleInteraction('hover')}
                className={ cn("relative z-10 block cursor-pointer px-4.5 py-2 text-xs uppercase text-gray-50 mix-blend-difference min-[1040px]:px-5 min-[1040px]:py-2.5 min-[1040px]:text-base", avenir.className)}
            >
                {children}
            </li>
        </Link>
    );
};

const Cursor = ({ position }: CursorProps) => {
    return (
        <motion.li
            animate={{
                ...position,
            }}
            className="absolute z-0 h-8 rounded-full bg-[#E9E9E9] min-[1040px]:h-11"
        />
    );
};

  