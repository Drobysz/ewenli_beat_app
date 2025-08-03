// Props
import { PlayerProps } from './PlayerController.props';

// Components
import Image from 'next/image';

export const PlayerController = ({handleResumeClick, isPlaying}: PlayerProps)=> {
    return (
        <div className='flex justify-end'>
            <Image 
                className='cursor-pointer'
                src={ isPlaying ? '/stop.svg' : '/resume.svg' }
                width={50}
                height={50}
                alt='player'
                onClick={()=> handleResumeClick()}
            />
        </div>
    );
};