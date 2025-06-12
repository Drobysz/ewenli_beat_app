import { ChangeEvent } from "react";

export interface TimeBarProps {
    duration: number;
    currentTime: number;
    handleSeek: (e: ChangeEvent<HTMLInputElement>)=> void;    
};