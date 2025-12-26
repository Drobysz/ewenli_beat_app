'use client'

// Props
import { FC } from "react";
import { AuthBtnProps } from "./AuthBtn.props";

// framer-motion
import { motion } from "framer-motion";

// Deps
import cn from 'classnames';

export const AuthBtn: FC<AuthBtnProps> = ({btnType, className, ...props}) => {

    return (
        <motion.button
            {...props}
            className={cn(className, "rounded-3xl w-full bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 text-center")
            }
        >
            {
                btnType === 'login' ? 'Log In' : 'Register'
            }
        </motion.button>
    );
};