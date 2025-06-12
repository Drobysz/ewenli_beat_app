// Props
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { MotionValue } from "framer-motion";

export default interface ScrollParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode,
    scrollYProgress: MotionValue<number>
};

