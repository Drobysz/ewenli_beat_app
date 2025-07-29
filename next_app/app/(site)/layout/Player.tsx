'use client'

// Props
import { ChangeEvent } from 'react';

// Hooks
import { useContext, useEffect, useRef, useState } from 'react';

// Context
import { SiteContext } from '../context/site.context';

// Components
import Image from 'next/image';
import { BeatTitle, PlayerController, TimeBar, VolumeBar } from '@/components/index';

// Deps
import cn from 'classnames';

export const Player = ()=> {
    // Audio Control Ref
    const audioRef = useRef<HTMLAudioElement>(null!);
    // Context States
    const { beatId, isPlayerVisible, currentBeat, setBeatId, setPlayerVisibility, setCurrentBeat } = useContext(SiteContext);
    // Audio Tag States
    const [ duration, setDuration ] = useState(0);
    const [ currentTime, setCurrentTime ] = useState(0);

    // Volume states
    const [ isSoundVisible, setSoundVisibility ] = useState(false);

    // Setting up of a new track
    useEffect(()=> {
        audioRef.current.src = currentBeat.beatUrl;

        const handleLoadedMetadata = () => {
            setDuration(audioRef.current!.duration);
        };

        audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        if (currentBeat.name !== '')
            audioRef.current.play()
    },[currentBeat.name, currentBeat.beatUrl]);

    // Player Visibility
    useEffect(()=> {
        if (isPlayerVisible === false){
            setCurrentBeat({
                ...currentBeat,
                isPlaying: false
            });
            audioRef.current.pause()
        }
    }, [isPlayerVisible]);

    // Time Update
    useEffect(() => {
        const onTimeUpdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };

        audioRef.current.addEventListener('timeupdate', onTimeUpdate);
  }, []);

    // Play/Pause
    useEffect(()=> {
        if (currentBeat.isPlaying){
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    },[currentBeat.isPlaying]);

    // Play/Pause functions
    const handleResumeClick = ()=> {
        setCurrentBeat({
            ...currentBeat,
            isPlaying: !currentBeat.isPlaying
        });
    };

    // Change Time
    const handleSeek = (e: ChangeEvent<HTMLInputElement>)=> {
        const updatedTime = Number(e.target.value);
        audioRef.current.currentTime = updatedTime;
        setCurrentTime(updatedTime)
    };

    const handleSoundSeek = (e: ChangeEvent<HTMLInputElement>)=> {
        audioRef.current.volume = Number(e.target.value);
    };

    // Change ID
    const changeId = (n: number)=> {
        setBeatId({
            ...beatId,
            id: n
        });
    };

    const handleArrowClick = (direction: '+' | '-')=> {
        switch (direction) {
            case '+':
                if (beatId.id + 1 !== beatId.qntty){
                    changeId(++beatId.id)
                    ++beatId.id
                }
            case '-':
                if (beatId.id - 1 !== -1)
                    changeId(--beatId.id)
        }
    };

    return (
        <div className={cn('fixed bottom-0 z-10 w-[100vw] h-15 grid grid-cols-[auto_minmax(320px,_1000px)_auto] bg-gray-500 border-t-1 border-t-gray-700 pr-2', {
            ['hidden']: isPlayerVisible === false
        })}>
            <div />
            <div className=' grid grid-cols-[0.2fr_0.25fr_0.55fr_auto] max-[520px]:grid-cols-[0.2fr_0.25fr_0.75fr_auto] gap-4 items-center'>
                <PlayerController 
                    handleArrowClick={handleArrowClick}
                    handleResumeClick={handleResumeClick}
                    isPlaying={currentBeat.isPlaying}
                />

                <BeatTitle 
                    category={currentBeat.category}
                    name={currentBeat.name}
                    imgUrl={currentBeat.imgUrl}
                />
                
                <div className='grid grid-cols-[0.8fr_0.2fr] relative max-[520px]:gap-4'>
                    <TimeBar 
                        handleSeek={handleSeek}
                        duration={duration}
                        currentTime={currentTime}
                    />

                    <VolumeBar 
                        isSoundVisible={isSoundVisible}
                        setSoundVisibility={setSoundVisibility}
                        handleSoundSeek={handleSoundSeek}
                    />
                </div>
                
                <Image 
                    className='hover:opacity-60 active:opacity-60 active:scale-96 justify-self-end max-[775px]:w-[25px] max-[775px]:h-[25px]'
                    onClick={()=> setPlayerVisibility(false)}
                    src='/cross.svg'
                    width={34}
                    height={34}
                    alt='cross'
                />

                <audio 
                    className='hidden'
                    ref={audioRef}
                />
            </div>
            <div />
        </div>
    );
};