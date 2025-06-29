'use client'

// Components
import Image from "next/image";

// Hooks/Props
import { useState, FC } from "react";
import { BeatBoxImgProps } from "./BeatBoxImg.props";

// Deps
import cn from 'classnames';


export const BeatBoxImg: FC<BeatBoxImgProps> = ({imgUrl, isPlaying, mode, handleResumeClick})=> {
    // Hover state of beat covers
    const [ isHovered, setHover ] = useState(false);

    return (
        <div 
            className="relative h-full w-[82px] rounded-[0.5rem]" 

            style={{
                backgroundImage: imgUrl !== undefined ? `url(${imgUrl})` : 'url(/swrc.png)',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}

            onMouseEnter={()=> setHover(true)}
            onMouseLeave={()=> setHover(false)}
        >
            {
                mode === 'shop' && (
                    <div 
                        className={cn("bg-black/60 h-full w-full flex justify-center items-center transition-all duration-500",{
                            ['hidden']: isHovered === false,
                            ['absolute']: isHovered
                        })}
                    >
                        <Image 
                            src={isPlaying ? '/stop.svg' : '/resume.svg'}
                            width={50}
                            height={50}
                            alt="play"
                            onClick={handleResumeClick}
                        />
                    </div>
                )
            }
            
        </div>
        
    );
};