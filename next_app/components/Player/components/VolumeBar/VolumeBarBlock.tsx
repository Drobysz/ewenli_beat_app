'use client'

// Props
import { VolumeBarProps } from './VolumeBar.props';

// Deps
import cn from 'classnames';

// Components
import Image from 'next/image';

// Hooks
import { useState } from 'react';

export const VolumeBar = ({handleSoundSeek}: VolumeBarProps)=> {
    const [ isSoundVisible, setSoundVisibility ] = useState(false);

    return (
        <div 
            className='relative flex self-center justify-self-center'
            onMouseEnter={()=> setSoundVisibility(true)}
            onMouseLeave={()=> setSoundVisibility(false)}
            onClick={()=>      setSoundVisibility(!isSoundVisible)}
        >
            <Image 
                className='max-[775px]:w-[30px] max-[775px]:h-[30px]'
                src='/sound.svg'
                width={45}
                height={45}
                alt='cross'
            />
            <div
                className={cn('hover:absolute pt-10 -right-13 -top-30 max-[775px]:-right-15', {
                    ['hidden']: isSoundVisible === false,
                    ['absolute']: isSoundVisible
                })}
            >
                <div className='-rotate-90 bg-white/70 px-2 flex justify-center rounded-3xl'>
                    <input
                        className='py-1'
                        type="range"
                        min="0"
                        max={1}
                        step="0.1"
                        onChange={(e)=> handleSoundSeek(e)}
                    />
                </div>
            </div>          
        </div>
    );
};