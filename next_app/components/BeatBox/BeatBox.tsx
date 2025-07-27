'use client'

// Props/Hooks
import { useEffect, useState, useContext } from "react";
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
    // Scale state
    const [ scaleState, setScaleState ] = useState(false);
    // Display state
    const [ displayState, setDisplayState ] = useState(true);
    // Play state
    const [ isPlaying, setPlay ] = useState(false);
    // Current beat
    const { currentBeat, isPlayerVisible, beatId, setCurrentBeat, setPlayerVisibility, setBeatId } = useContext(SiteContext);

    const changeId = ()=> {
        setBeatId({
            ...beatId,
            id: idx
        });
    };

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
        setPlay(!isPlaying)

        if (currentBeat.name !== beat.name){
            if (currentBeat.name === '')
                setPlayerVisibility(true);

            changeId();
            changeBeat();
        } else {
            if (isPlayerVisible === false)
                setPlayerVisibility(true);

            setCurrentBeat({
                ...currentBeat,
                isPlaying: !currentBeat.isPlaying
            });
        };
    };

    useEffect(()=> {
        if (isPlaying && currentBeat.name !== beat.name)
            setPlay(false);
    }, [currentBeat.name]);

    useEffect(()=> {
        if (currentBeat.name === beat.name)
            setPlay(currentBeat.isPlaying)
    }, [currentBeat.isPlaying]);

    useEffect(()=> {
        if (idx === beatId.id && currentBeat.name !== beat.name){
            changeBeat();
            setPlay(true);
        }
    }, [beatId.id]);

    return (
        <li className={cn("justify-between items-center",{
            ['flex']: displayState,
            ['hidden']: displayState === false
        })}>
            <span className={cn('text-3xl text-white max-[580px]:text-xl', impact.className)}>
                {idx+1}
            </span>
            <div className="bg-gray-800 rounded-[2rem] max-[580px]:rounded-xl h-fit w-[90%] hover:bg-gray-800/65 transition-all duration-500 p-4 max-[580px]:p-2 flex flex-col gap-4">
                <div className="flex items-center gap-3 h-[82px] max-[580px]:h-[54px]">
                    <BeatBoxImg 
                        mode={mode}
                        handleResumeClick={handleResumeClick}
                        isPlaying={isPlaying}
                        imgUrl={beatImg.url}
                    />

                    <hr className="bg-gray-700 w-0.5 h-full"/>

                    <div className="flex flex-col justify-between h-[82px] max-[580px]:h-[51px]">
                        <h3 className={cn('text-xl max-[580px]:text-base max-[580px]:leading-4 text-white hover:text-link-blue/70 hover:drop-shadow-text-link transition-all duration-500 cursor-pointer' ,bagel_fat_one.className)}>
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