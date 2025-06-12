// Props
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ServiceCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
   title: string,
   description: string,
   img: string
};