'use client'

// Animation tools
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';

// Hooks
import { useEffect } from 'react';

// Object template library
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export const AuroraRGB = () => {
    const colorSet = [ '#13FFAA', '#1E67C6', '#CE84CF', '#DD335C' ];
    const color = useMotionValue(colorSet[0])
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

    useEffect(()=>{
        animate(color, colorSet, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, [])

    return (
        <motion.section
            className="w-[100vw] h-[750px] absolute top-0 -z-1"
            style={{
                backgroundImage: backgroundImage
            }} 
        >
            <div className='z-0 absolute inset-0'>
                <Canvas>
                    <Stars radius={50} count={2500} factor={4} fade speed={2}/>
                </Canvas>
            </div>
        </motion.section>
    )
};