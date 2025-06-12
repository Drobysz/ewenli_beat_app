import { DetailedHTMLProps, HTMLAttributes } from "react";

export type FooterLinkSetProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface MediaCategory {
    name: string,
    category: string,
    color: string,
    links: MediaLink[],
};

interface MediaLink {
    mediaName: string,
    link: string,
}