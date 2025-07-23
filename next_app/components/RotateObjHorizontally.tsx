"use client"

// Animation
import { motion, useMotionValue, useTransform } from "framer-motion";

// Hooks/Props
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useRef, useState } from "react";

import cn from "classnames";

interface RotateObjHorizontallyType extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode
}

export const RotateObjHorizontally = ({children, className}: RotateObjHorizontallyType)=> {
    const [isHovered, setHover] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);

    const cursorDistance = useTransform(mouseX, (horizontalCoord)=> {
        const border = ref.current?.getBoundingClientRect().x ?? 0;
        const iconWidth = ref.current?.getBoundingClientRect().width ?? 50;
        
        return horizontalCoord - (border + iconWidth/2);
    });

    const rotateX = useTransform(
        cursorDistance,
        [-600, 600],
        [150, -150]
    );

    return (
        <motion.div
            ref={ref}

            onMouseMove={(e)=> mouseX.set(e.pageX)}

            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}

            onTouchStart={()=> setHover(true)}
            onTouchEnd={()=>   setHover(false)}

            style={{ rotateY: isHovered ? rotateX : 0 }}
            className={cn("transtition-all duration-500", className, {
                ["scale-3d scale-105 perspective-dramatic"]: isHovered
            })}
        >
            {children}
        </motion.div>
    )
}