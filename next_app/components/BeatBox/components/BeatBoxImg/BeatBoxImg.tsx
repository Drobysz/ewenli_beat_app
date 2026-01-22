'use client'

import Image from "next/image";
import { BeatBoxImgProps } from "./BeatBoxImg.props";
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
            className={cn(
                "relative h-full w-[82px] rounded-lg",
                "max-[580px]:w-[54px] max-[580px]:h-[54px]",
                "cursor-pointer"
            )}
            style={{
                backgroundImage: imgUrl !== undefined 
                            ? `url(${imgUrl})` 
                            : 'url(/swrc.png)',
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div 
                className={cn(
                    "h-full w-full flex justify-center rounded-lg",
                    "items-center transition-all duration-500",{
                    ['hidden']: isHovered === false,
                    ['absolute bg-black/40']: isHovered,
                    ['bg-black/60']: mode === 'shop'
                })}
            >
                {(mode === 'shop' || mode == 'workshop') && 
                    <Image 
                        src={isPlaying ? '/stop.svg' : '/resume.svg'}
                        width={50}
                        height={50}
                        alt="play"
                        onClick={handleResumeClick}
                    />
                }
            </div>
        </div>
    );
};