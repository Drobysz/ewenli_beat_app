import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TypewriterProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{
	text: string,
	delay: number,
	infinite?: boolean,
	className?: string
}