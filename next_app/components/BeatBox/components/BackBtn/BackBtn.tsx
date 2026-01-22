'use client'

import { FC } from "react";
import { BackBtnProps } from "./BackBtnProps.props";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import cn from 'classnames';

export const BackBtn: FC<BackBtnProps> = ({className}) => {
    const router = useRouter();

    return (
        <motion.div className={cn(
            "h-[34px] text-xs flex items-center justify-center",
            "gap-2 rounded-full border border-zinc-700",
            "bg-linear-to-br from-zinc-800/30 to-zinc-950/30 text-zinc-50",
            "transition-all duration-1600 before:absolute before:inset-0",
            "before:-z-10 before:translate-x-[200%] before:scale-[2.5]",
            "before:rounded-[100%] before:bg-zinc-100 before:transition-transform",
            "before:duration-1000 hover:text-zinc-900",
            "hover:before:translate-x-0 active:scale-95 py-3 overflow-hidden",
            className
        )}
            onClick={()=> router.back()}
        >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            Go back
        </motion.div>
    );
};