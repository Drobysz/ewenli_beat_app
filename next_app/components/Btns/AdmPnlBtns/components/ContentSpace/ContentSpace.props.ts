import { ReactNode } from "react";

export default interface ContentSpaceProps {
	spacing: number;
	isHovered: boolean;
	translation: number;
	children: ReactNode;
}