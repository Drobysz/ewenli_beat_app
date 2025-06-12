import { ChangeEvent } from "react";

export interface VolumeBarProps {
    isSoundVisible: boolean;
    setSoundVisibility: (isSoundVisible: boolean)=> void;   
    handleSoundSeek: (e: ChangeEvent<HTMLInputElement>)=> void;     
};