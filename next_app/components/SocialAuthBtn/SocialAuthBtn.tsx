'use client'

// Props
import { FC } from "react";
import { SocialAuthBtnProps } from "./SocialAuthBtnProps.props";

// framer-motion
import { motion } from "framer-motion";

// Deps
import cn from 'classnames';

export const SocialAuthBtn: FC<SocialAuthBtnProps> = ({btnType, className}) => {

    return (
        <motion.div 
            className={cn(className, "h-[44px] rounded-full border border-zinc-700 bg-gradient-to-br from-zinc-800/70 to-zinc-950/70 px-3 text-zinc-50 transition-all duration-300 before:absolute before:inset-0 before:-z-10 before:scale-[2.5] before:rounded-[100%] before:bg-zinc-100 before:transition-transform before:duration-500 hover:scale-105 hover:text-zinc-900 hover:before:translate-y-0 active:scale-100 py-3 overflow-hidden flex justify-center items-center",{
                ['before:translate-y-[200%]']: btnType === 'google',
                ['before:translate-y-[-200%]']: btnType === 'github'
            })}
        >
            {/* Github icon */}
            {
                btnType === 'github' && <svg stroke="currentColor" fill="currentColor" strokeWidth="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>
            }

            {/* Google icon */}
            {
                btnType === 'google' && <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="currentColor" x="0px" y="0px" height="1em" width="1em" viewBox="0 0 50 50">
                <path d="M 25.996094 48 C 13.3125 48 2.992188 37.683594 2.992188 25 C 2.992188 12.316406 13.3125 2 25.996094 2 C 31.742188 2 37.242188 4.128906 41.488281 7.996094 L 42.261719 8.703125 L 34.675781 16.289063 L 33.972656 15.6875 C 31.746094 13.78125 28.914063 12.730469 25.996094 12.730469 C 19.230469 12.730469 13.722656 18.234375 13.722656 25 C 13.722656 31.765625 19.230469 37.269531 25.996094 37.269531 C 30.875 37.269531 34.730469 34.777344 36.546875 30.53125 L 24.996094 30.53125 L 24.996094 20.175781 L 47.546875 20.207031 L 47.714844 21 C 48.890625 26.582031 47.949219 34.792969 43.183594 40.667969 C 39.238281 45.53125 33.457031 48 25.996094 48 Z"></path>
                </svg>
            }

        </motion.div>
    );
};