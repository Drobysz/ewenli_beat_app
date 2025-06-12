'use client'

// Hooks
import React, { FC, useRef, useState, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from 'react-responsive';

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
import { AppContext } from "@/app/context/app.context";


export const NavBar = () => {
    const { token } = useContext(AppContext);
    // List of tabs
    const baseTabs = [
        { href: '/legal_docs', label: 'legal docs' },
        { href: '/seller', label: 'about the seller' },
        { href: '/shop', label: 'shop' },
    ];

    const authTabs = [
        { href: '/inventory', label: 'inventory' },
        { href: '/basket', label: 'basket' },
    ];

    const tabs = token ? [...baseTabs, ...authTabs] : baseTabs;

    const [position, setPosition] = useState<CursorPosition>({
        left: 0,
        width: 0,
    });

    const [positionClicked, setPositionClicked] = useState<CursorPosition>({
        left: 0,
        width: 0,
    });

    const pathname = usePathname();

    useEffect(()=> {
        if (pathname === '/') {
            setPositionClicked({
                left: 0,
                width: 0,
            });

            setPosition({
                left: 0,
                width: 0,
            });
        }
    }, [pathname]);

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
    const pathname = usePathname();
    const isLess1040 = useMediaQuery({ query: '(min-width: 1040px)' });
    const isMore1040 = useMediaQuery({ query: '(max-width: 1040px)' });

    useEffect(() => {
        if (isActive) {
            const { offsetLeft: left, offsetWidth: width } = ref.current;
            setPositionClicked({ left, width });
            setPosition({ left, width });
        }
    }, [pathname, isLess1040, isMore1040]);

    const handleInteraction = (interaction: 'hover' | 'click')=> {
        const { width } = ref.current.getBoundingClientRect();
        const left = ref.current.offsetLeft;

        if (interaction === 'click') {
            setPositionClicked({
                left,
                width
            })
        } else if (interaction === 'hover') {
            setPosition({
                left,
                width
            });
        };
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

  