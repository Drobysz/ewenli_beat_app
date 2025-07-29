'use client'

// Components
import Image from "next/image";

// Hooks/Props
import { BeatBoxImgProps } from "./BeatBoxImg.props";

// Deps
import cn from 'classnames';


export const BeatBoxImg = ({
    imgUrl, 
    isPlaying, 
    mode, 
    isHovered,
    handleResumeClick
}: BeatBoxImgProps)=> {
    return (
        <div 
            className="relative h-full w-[82px] rounded-[0.5rem] max-[580px]:w-[54px] max-[580px]:h-[54px] cursor-pointer" 
            style={{
                backgroundImage: imgUrl !== undefined 
                            ? `url(${imgUrl})` 
                            : 'url(/swrc.png)',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
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