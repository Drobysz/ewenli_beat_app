'use client'

// Components
import { ScrollParagraph } from '@/components/index';
import Image from 'next/image';

// Fonts
import { b216 } from '@/fonts/fonts'; 

// Deps
import cn from 'classnames';

// Components / Hooks
import { useScroll } from 'framer-motion';
import { useRef } from 'react';

export const ScrollPBlock = () => {

    const target = useRef<HTMLParagraphElement>(null!);
    const { scrollYProgress } = useScroll({
        target: target,
    });

    return (
        <div 
            className='h-[800vh] relative mb-50'
            ref={target}
        >
            <div className='h-[524px] sticky pt-60 px-4 top-0 flex justify-center items-center gap-[97px] mb-40 max-[920px]:gap-12 max-[680px]:flex-col'>
                <Image 
                    src='/seller/rabbit_img.jpg' 
                    width={300} 
                    height={504} 
                    alt='rabbit'
                    className='border-[1.875rem] border-white max-[920px]:w-[200px] max-[920px]:h-[356px] max-[920px]:border-[0.938rem]'
                />
                <ScrollParagraph 
                    scrollYProgress={scrollYProgress} 
                    className={cn(b216.className, 'flex flex-wrap gap-1.5 text-white w-[450px] max-[920px]:text-xs')}
                >Ewenli’s rabbit wasn’t born in a forest — it came from a crashed USB stick. A glitch in the code sparked its heartbeat, and from that moment, the rabbit’s fur shimmered with broken pixels and neon static. It’s not just a mascot — it’s the spirit animal of chaos and creation. Always running, never caught, the rabbit dives headfirst into noise, distortion, and melody like it’s a second nature. Some say it only appears at 3 a.m. when the beat finally hits right. Others believe it lives inside every synth preset gone wrong. But for Ewenli, the rabbit is a reminder: perfection is boring — chase the glitch.
                </ScrollParagraph>
            </div>
        </div>
    );
};