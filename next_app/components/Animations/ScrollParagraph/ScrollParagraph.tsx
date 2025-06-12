// @ts-nocheck
'use client' 

// Props
import { FC, ReactNode } from 'react';
import ScrollParagraphProps from './ScrollParagraph.props';

// Components / Hooks
import { motion, MotionValue, useTransform } from 'framer-motion';


export const ScrollParagraph: FC<ScrollParagraphProps> = ({children, className, scrollYProgress }) => {

    return (
        <p className={className}>
            {
                children !== null && children!.split(' ').map( (w : string, idx: number) => {
                    const start = idx / children!.split(' ').length;
                    const end = start + (1 / children!.split(' ').length)

                    return <Word range={[start, end]} scrollYProgress={scrollYProgress} key={idx}>{w}</Word>;
                } )
            }
        </p>
    );
};


const Word = ({children, range, scrollYProgress}: {children: ReactNode, range: [start: number, end: number], scrollYProgress: MotionValue<number> }) => {
    const opacity = useTransform(scrollYProgress, range, [0, 1]);

    return (
        <span className='relative'>
            {/* Word itself */}
            <motion.span
                style={{opacity: opacity}}
            >
                {children}
            </motion.span>

            {/* Word shadow */}
            <span className='absolute inset-0 opacity-10'>
                {children}
            </span>
        </span>
    );
};