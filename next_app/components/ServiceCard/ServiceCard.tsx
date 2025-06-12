'use client'

// Props
import { FC } from "react"
import { ServiceCardProps } from "./ServiceCard.props"

// Dependencies
import cn from "classnames";
import { motion } from "framer-motion";

// Fonts
import { bebas_neue, baumans } from "@/fonts/fonts";

export const ServiceCard: FC<ServiceCardProps> = ({ title, description, img }) => {
    return (
        <motion.article
            whileHover={{scale: 1.02, boxShadow: '0px 0px 10px 5px #953396'}}
            transition={{
                duration: 0.5,
                ease: 'anticipate'
            }}
            className="w-[340px] h-[433px] rounded-2xl border-2 border-gray-200 overflow-hidden relative"
        >

            {/* Card image */}
            <div
                style={{
                    backgroundImage: `url(service_images/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} 
                className="w-full h-[257px] bg-gray-100 border-b-1 border-b-gray-200" 
            />

            {/* Extandable Container with text content*/}
            <motion.div 
                className="absolute flex flex-col gap-2.5 p-2.5 backdrop-blur-lg"
                whileHover={{y: -257}}
                transition={{
                    duration: 0.7,
                    ease: 'easeInOut'
                }}
            >
                <h2 className={cn("text-2xl text-white", bebas_neue.className)}>{title}</h2>
                <p 
                    className={cn("text-base text-[#787878] hover:text-link-blue", baumans.className)}
                >
                    {description}
                </p>
            </motion.div>

            {/* Inner shadow */}
            <div 
                className="w-full h-full absolute top-0 pointer-events-none" 
                style={{background: 'linear-gradient( to bottom, transparent 70%, rgba(0, 0, 0, 1) 100%)'}}
            ></div>
        </motion.article>
    );
};