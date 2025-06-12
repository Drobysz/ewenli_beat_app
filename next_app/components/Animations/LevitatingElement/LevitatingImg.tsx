'use client'

// Props
import { LevitatingImgProps } from "./LevitatingImg.props";
import { FC } from "react";


// Components / Hooks
import { motion, useMotionValue, animate } from 'framer-motion';
import { useEffect } from "react";
import NextImage from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const LevitatingImg: FC<LevitatingImgProps> = ({ src, width, height, alt="#"}) => {
    const MotionImage = motion(NextImage);
    const pos = useMotionValue(-5);

    useEffect(()=>{
        animate(pos, [-5, 5], {
            ease: 'easeInOut',
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [])

    return (
        <div className="relative">
            <DotLottieReact
                src="https://lottie.host/4f18f3f4-1837-4a17-a733-7d148e4e2773/oDPDY27Olr.lottie"
                loop
                autoplay
                className="absolute -left-24 -top-35 w-[400px] h-[800px]"
            />
            <MotionImage 
                src={String(src)} 
                width={Number(width)}
                height={Number(height)} 
                alt={alt}
                className="z-10"
                style={{y: pos}}
            />
            <DotLottieReact
                src="https://lottie.host/c8d3840c-1d19-4415-b860-882ceecb88b9/p8Him21mKA.lottie"
                loop
                autoplay
                className="absolute inset-0 z-20"
            />
        </div>
        
    );
};