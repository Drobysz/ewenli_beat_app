// Props
import { FC } from 'react';
import { PlayerProps } from './PlayerController.props';

// Components
import Image from 'next/image';

export const PlayerController: FC<PlayerProps> = ({handleArrowClick, handleResumeClick,isPlaying})=> {

    return (
        <div className='flex'>
            <Image 
                className='cursor-pointer'
                src='/playerArrow.svg'
                width={40}
                height={40}
                alt='arrow'
                onClick={()=> handleArrowClick('-')}
            />
            <Image 
                className='cursor-pointer'
                src={ isPlaying ? '/stop.svg' : '/resume.svg' }
                width={50}
                height={50}
                alt='player'
                onClick={()=> handleResumeClick()}
            />
            <Image 
                className='rotate-180 cursor-pointer transition-all duration-400'
                src='/playerArrow.svg'
                width={40}
                height={40}
                alt='arrow'
                onClick={()=> handleArrowClick('+')}
            />
        </div>
    );
};