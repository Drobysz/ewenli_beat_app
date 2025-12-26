import { ImageProps } from "next/image";
import { DetailedHTMLProps, HTMLAttributes,  } from "react";

export interface CrossProps extends DetailedHTMLProps<HTMLAttributes<ImageProps>, ImageProps>{
	className?: string,
	width: number,
	heigth?: number
}