import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TitleBodyProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
	children: ReactNode;
	size: 'small' | 'middle' | 'large';
}