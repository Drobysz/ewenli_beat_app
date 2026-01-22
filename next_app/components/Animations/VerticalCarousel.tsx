'use client'

// Props
import { DetailedHTMLProps, HTMLAttributes, FC } from "react";

// Hooks
import { useRef } from 'react';
import { useScroll, motion, useTransform, MotionConfig, useSpring } from 'framer-motion';

// Fonst 
import { bagel_fat_one, b216 } from '@/fonts/fonts';

// Deps
import cn from 'classnames';

type VerticalCarouselProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const VerticalCarousel: FC<VerticalCarouselProps> = () => {
    // Targeting of the elevator's vertical progress
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Left part
    const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
    // Right part
    const y2 = useTransform(scrollYProgress, [0, 1], ["-300%", "0%"]);

    const scaleX = useSpring(scrollYProgress);
    const background = useTransform(scrollYProgress,
      [0,1],
      ['#0F1EF0', '#A9389F']
    )

    return (
        // Elevator
        <div ref={targetRef} className='w-full relative h-[1000vh]'>
            {/* Line that traces the progress */}
            <motion.div
                style={{scaleX: scaleX, background: background}}
                className='w-full h-5 sticky origin-left z-10 top-18'
            ></motion.div>
            {/* Cabin */}
            <div className="sticky top-0 flex items-center h-screen w-full">
                <div className="w-full h-[80vh] grid grid-cols-[1fr_1fr] overflow-hidden">

                    {/* Transition setup for 2 divs */}
                    <MotionConfig
                    transition={{
                        duration: 1,
                        ease: 'easeInOut'
                    }}
                    >
                        {/* Left part */}
                        <motion.div 
                            style={{ y: y1 }}
                        >
                            {
                                Paragraphes.map( (obj, idx) => (
                                    <div
                                        key={obj.id}
                                        className="relative"
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            backgroundColor: (idx+1)%2 === 0 ? '#0F1EF0' : 'white',
                                            color: (idx+1)%2 === 0 ? '#FD00C2' : '#0F1EF0',
                                        }}
                                            
                                    >
                                        <h2 
                                            className={cn(bagel_fat_one.className, 'text-5xl absolute top-5 left-3 max-[950px]:text-4xl max-[640px]:text-3xl max-[640px]:top-2 max-[520px]:text-2xl')}
                                        >
                                            Paragraph №{obj.id}
                                        </h2>
                                        <p 
                                            className={cn(b216.className, 'absolute top-50 left-3 h-full w-[80%] overflow-auto max-[1036px]:top-30 max-[950px]:text-sm max-[640px]:text-xs max-[640px]:w-[95%] max-[640px]:leading-6 max-[640px]:top-15')}
                                        >
                                            {obj.text}
                                        </p>
                                    </div>
                                ) ) 
                            }
                        </motion.div>

                        {/* Right part */}
                        <motion.div className='' style={{ y: y2 }}>
                            {
                                Paragraphes.map( obj => <div
                                        key={obj.id}
                                        style={{
                                            // Background image
                                            backgroundImage: `url(/legal_images/legal${obj.id}.jpg)`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",

                                            height: '100%',
                                            width: '100%',
                                        }}
                                ></div> ) 
                            }
                        </motion.div>
                    </MotionConfig>

                </div>
            </div>
        </div>
    )
};

const Paragraphes = [
    {
        id: 1,
        text: 'All music available on this website is copyrighted and solely owned by the author. By purchasing a license, you obtain specific usage rights defined in the license terms. Redistribution, resale, or transfer of music without explicit written permission is strictly prohibited.',
    },

    {
        id: 2,
        text: 'Licensed tracks may be used in videos, podcasts, commercials, games, and social media under the selected license type. Unauthorized use outside the permitted scope, such as in political content or adult media, may lead to legal action and license revocation.',
    },

    {
        id: 3,
        text: 'Some license types require visible credit to the music author. This must be included in the video description, website footer, or app credits. Failure to provide proper attribution may result in suspension of usage rights and denial of future licenses.',
    },

    {
        id: 4,
        text: 'Once a music license is issued, all sales are final and non-refundable, except in cases of technical error. If the terms of use are violated, the license will be terminated immediately, and you may be required to cease all usage and remove the content from public access.',
    },
];