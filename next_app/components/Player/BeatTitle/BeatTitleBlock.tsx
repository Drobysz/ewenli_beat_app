// Props
import { FC } from 'react';
import { BeatTitleProps } from './BeatTitle.props';

// Fonts
import { bagel_fat_one, avenir } from '../../../fonts/fonts';

// Deps
import cn from 'classnames';

export const BeatTitle: FC<BeatTitleProps> = ({imgUrl, category, name})=> {

    return (
        <div className='flex h-full items-center gap-2.5 justify-self-center'>
            <div 
                className="h-[45px] w-[45px] rounded-[0.5rem] border-1 border-white max-[630px]:h-[37px] max-[630px]:w-[37px] " 

                style={{
                    backgroundImage: imgUrl !== undefined ? `url(${imgUrl})` : 'url(/swrc.png)',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className='flex flex-col h-full justify-start gap-1.5'>
                <span
                    className={cn('text-white text-xl max-[690px]:text-base max-[690px]:pt-0.5', bagel_fat_one.className)}
                >
                    {name}
                </span>
                <span
                    className={cn('text-white text-[0.625rem] px-1 py-0.5 w-fit rounded-full bg-gray-100 border-1 border-white/60 max-[725px]:hidden', avenir.className)}
                >
                    {category}
                </span>
            </div>
        </div>
    );
};