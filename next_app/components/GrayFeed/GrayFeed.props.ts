// Props
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface GrayFeedProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
};