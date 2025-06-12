// Components
import Image from "next/image";

// Deps
import cn from 'classnames';

// Props
import { PriceTagProps } from "./PriceTag.props";
import { FC } from "react";

export const PriceTag: FC<PriceTagProps> = ({priceState, setPriceState})=> {

    return (
        <div className="flex gap-5 items-end mb-10 pl-12 max-[1200px]:pl-0 max-[1200px]:justify-center">
            <h2 className="text-white text-4xl">Songs</h2>
            
            <div
                className="flex items-center gap-1 transition-all duration-200 active:text-dark-gold icon-wrapper text-gold"
                onClick={()=> setPriceState(!priceState)}
            >
                <h3 className="text-2xl">Price</h3>

                <Image 
                    className={cn('bg-gold rounded-full transition-all duration-200', {
                        ['-rotate-180']: priceState,
                        ['rotate-0']: !priceState
                    })}
                    src="/arrow.svg"
                    alt="price"
                    width={20}
                    height={20}
                />
            </div>
        </div>
    );
};