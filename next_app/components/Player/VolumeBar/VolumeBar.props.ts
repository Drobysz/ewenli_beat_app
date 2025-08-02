import { ChangeEvent } from "react";

export interface VolumeBarProps {
    handleSoundSeek: (e: ChangeEvent<HTMLInputElement>)=> void;     
};