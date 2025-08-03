'use client'

// Props/Hooks
import { useState, useContext } from "react";
import BeatBoxProps from "./BeatBox.interface";

// Font 
import { impact, bagel_fat_one } from "@/fonts/fonts";

// Components
import { BeatBtns, BeatBoxImg, CustomBtn } from "@/components/index";
import Image from "next/image";

// Context
import { SiteContext } from "@/app/(site)/context/site.context";

// Dep
import cn from 'classnames';

export const BeatBox = ({ 
    beat, 
    beatImg, 
    beatFile, 
    idx, 
    mode 
}: BeatBoxProps)=> {
    const [ scaleState, setScaleState ]     = useState(false);
    const [ displayState, setDisplayState ] = useState(true);
    const [ isHovered, setHover ]           = useState(false);

    const { 
        currentBeat,
        isPlayerVisible, 
        setCurrentBeat, 
        setPlayerVisibility, 
        setLicenseWindow,
        setCurentBeatInLicense
    } = useContext(SiteContext);

    const changeBeat = ()=> {
        setCurrentBeat({
            name: beat.name,
            category: beat.categories,
            imgUrl: beatImg.url,
            beatUrl: beatFile!.url,
            isPlaying: true
        });
    };

    const handleResumeClick = ()=> {
        if (isPlayerVisible === false) {
            setPlayerVisibility(true);
        }

        if (currentBeat.name !== beat.name){
            changeBeat();
        } else {
            setCurrentBeat({
                ...currentBeat,
                isPlaying: !currentBeat.isPlaying
            });
        };
    };

    const setNewLicenseBeat = () => {
        setLicenseWindow(true);
        setCurentBeatInLicense({
            name:     beat.name,
            category: beat.categories
        })
    };

    return (
        <li className={cn("justify-between items-center",{
            ['flex']:   displayState,
            ['hidden']: displayState === false
        })}>
            <span className={cn('text-3xl text-white max-[580px]:text-xl', impact.className)}>
                {idx+1}
            </span>
            <div 
                className="bg-gray-800 rounded-[2rem] max-[580px]:rounded-xl h-fit w-[90%] hover:bg-gray-800/65 transition-all duration-500 p-4 max-[580px]:p-2 flex flex-col gap-4"
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}
                onClick={()=> mode === "inventory" && setNewLicenseBeat()}
            >
                <div className="flex items-center gap-3 h-[82px] max-[580px]:h-[54px]">
                    <BeatBoxImg 
                        mode={mode}
                        handleResumeClick={handleResumeClick}
                        isPlaying={currentBeat.name === beat.name ? currentBeat.isPlaying : false}
                        isHovered={isHovered}
                        imgUrl={beatImg !== undefined ? beatImg.url : '/swrc.png'}
                    />

                    <hr className="bg-gray-700 w-0.5 h-full"/>

                    <div className="flex flex-col justify-between h-[82px] max-[580px]:h-[51px]">
                        <h3 className={cn(
                            'text-xl max-[580px]:text-base max-[580px]:leading-4 transition-all duration-500', 
                            bagel_fat_one.className, 
                            {
                                ['drop-shadow-text-link text-link-blue/70']: isHovered,
                                ['text-white']: !isHovered
                            })}>
                            {beat.name}
                        </h3>

                        {
                            mode === "shop" && (
                                <>
                                    <Image 
                                        src='/arrowWhite.svg'
                                        width={34}
                                        height={34}
                                        alt="arrow"
                                        className={cn("rounded-full border-2 border-gray-50 transition-all duration-300 hidden max-[580px]:w-[17px] max-[580px]:h-[17px] max-[730px]:block", {
                                            ['-rotate-90']: scaleState,
                                            ['rotate-0']: !scaleState,
                                        })}
                                        onClick={()=> setScaleState(!scaleState)}
                                    />

                                    <BeatBtns 
                                        beat={beat}
                                        className='flex justify-center max-[730px]:hidden'
                                    />
                                </>     
                            )
                        }

                        {
                            mode === 'basket' && (
                                <CustomBtn 
                                    color="red-ghost"
                                    className="w-fit h-fit"
                                    size="medium"
                                    idx={beat.id}
                                    btnType="delete"
                                    setDisplayState={setDisplayState}
                                >
                                    Delete
                                </CustomBtn>
                            )
                        }
                    </div>
                </div>   

                {
                    mode == 'shop' && (
                        <BeatBtns 
                            beat={beat}
                            className={cn({
                                ['hidden']: !scaleState,
                                ['flex justify-center min-[730px]:hidden']: scaleState
                            })}
                        />
                    )
                }
            </div>
        </li>
    );
};