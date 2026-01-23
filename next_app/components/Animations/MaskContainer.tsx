"use client"

// Hookd
import { useState, useRef, useEffect } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

// Animation
import { motion, useMotionTemplate } from "framer-motion";
import cn from 'classnames';

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  revealSize = 500,
  className,
  maskClassName
}: {
  children?: string | React.ReactNode;
  revealText?: string | React.ReactNode;
  size?: number;
  revealSize?: number;
  className?: string;
  maskClassName?: string;
  
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [revSize, setRevSize] = useState(revealSize);
  const [mousePosition, setMousePosition] = useState<{x: number , y: number}>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null!);
  const windowWidth = useWindowWidth();

  const maskSize = isHovered ? revSize : size;

  const updateMousePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const x = mousePosition.x - maskSize / 2;
  const y = mousePosition.y - maskSize / 2;

  useEffect(()=> {
    if (windowWidth === null) return;

    if (windowWidth <= 450) {
      setRevSize(170);
    } else if (windowWidth <= 540) {
      setRevSize(200);
    } else if (windowWidth <= 750) {
      setRevSize(230);
    } else if (windowWidth <= 960) {
      setRevSize(300);
    } else if (windowWidth <= 1150) {
      setRevSize(500);
    }
  }, [isHovered, windowWidth]);

  const coord = useMotionTemplate`${x}px ${y}px`;
  const mask  = useMotionTemplate`${maskSize}px`;

  return (
    <motion.div
      key={revSize} 
      ref={containerRef}
      onMouseMove={(e)=> updateMousePosition(e)}
      className={cn("relative h-full bg-[#0a0a0a]", className)}
    >
      <motion.div
        className={cn(
          "absolute rounded-3xl flex h-full w-full",
          "items-center justify-center bg-white",
          "text-black text-6xl mask-[url(/mask.svg)]",
          "mask-no-repeat"
        )}
        style={{
          maskPosition: coord,
          maskSize:     mask,
        }}
        transition={{
          maskSize:     { duration: 0.3, ease: "easeInOut" },
          maskPosition: { duration: 0.15, ease: "linear" },
        }}
      >
        <div
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={cn(
            "relative z-20 mx-auto",
            "max-w-4xl text-center font-bold",
            maskClassName
          )}
        >
          {children}
        </div>
      </motion.div>
 
      <div className={cn(
        "flex h-full w-full",
        "items-center justify-center",
        "pl-5 py-3"
      )}>
        {revealText}
      </div>
    </motion.div>
  );
};
