import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BeatBoxImgProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>{
    imgUrl: string;
    isPlaying: boolean;
    handleResumeClick: ()=> void;
    mode: 'basket' | 'shop' | 'inventory';
};