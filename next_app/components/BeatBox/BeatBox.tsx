'use client'

import { useState, useContext } from "react";
import BeatBoxProps from "./BeatBox.interface";
import { impact } from "@/fonts/fonts";
import { CustomBtn } from "@/components/index";
import { BeatBtns, BeatBoxImg, BeatBoxTitle, WSBtns } from "./components/index";
import { SiteContext } from "@/app/context/site.context";
import styles from "./BeatBox.module.scss";
import cn from 'classnames';

export const BeatBox = ({ 
    beat, beatImg, beatFile, 
    idx, mode 
}: BeatBoxProps)=> {
    const [ displayState, setDisplayState ] = useState(true);
    const [ isHovered, setHover ] = useState(false);

    const { 
        currentBeat, isPlayerVisible, 
        setCurrentBeat, setPlayerVisibility, 
        setModalWindow, setCurentBeatInLicense
    } = useContext(SiteContext);

    const isPlaying = currentBeat.name === beat.name
        ? currentBeat.isPlaying
        : false;
    const imgUrl = beatImg !== undefined
        ? beatImg.url
        : '/swrc.png'

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
        setModalWindow('License');
        setCurentBeatInLicense({
            name:     beat.name,
            category: beat.categories
        })
    };

    return (
        <li className={cn("justify-between items-center", {
            ['flex']:   displayState,
            ['hidden']: displayState === false
        })}>
            <span className={cn(
                styles.enum,
                impact.className
            )}>
                {idx+1}
            </span>
            <div 
                className={cn(
                    styles.box, {
                    [styles.box_default]: mode !== 'workshop',
                    [styles.box_workshop]: mode == 'workshop'
                })}
                onMouseEnter={()=> setHover(true)}
                onMouseLeave={()=> setHover(false)}
                onClick={()=> mode === "inventory" && setNewLicenseBeat()}
            >
                <BeatBoxImg 
                    mode={mode}
                    handleResumeClick={handleResumeClick}
                    isPlaying={isPlaying}
                    isHovered={isHovered}
                    imgUrl={imgUrl}
                />
                <hr className="bg-gray-700 w-0.5 h-full"/>
                <div className={styles.info_sect}>
                    <BeatBoxTitle 
                        name={beat.name}
                        category={beat.categories}
                        isHovered={isHovered}
                    />
                    {mode === "shop" &&
                        <BeatBtns className='flex justify-center' />
                    }
                    {mode === 'workshop' &&
                        <WSBtns 
                            beat={beat}
                            isHovered={isHovered}
                        />
                    }
                    {mode === 'basket' &&
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
                    }
                </div>   
            </div>
        </li>
    );
};