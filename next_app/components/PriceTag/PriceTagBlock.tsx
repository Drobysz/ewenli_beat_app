// Components
import Image from "next/image";

// Deps
import cn from 'classnames';

// Props
import { PriceTagProps } from "./PriceTag.props";

export const PriceTag = ({priceState, setPriceState}: PriceTagProps)=> {

    return (
        <div className="flex gap-5 max-[610px]:gap-2 items-end mb-10 max-[610px]:mb-5 pl-12 max-[1200px]:pl-0 max-[1200px]:justify-center max-[380px]:items-center max-[380px]:mb-2">
            <h2 className="text-white text-4xl max-[610px]:text-2xl max-[380px]:text-lg">Songs</h2>
            
            <div
                className="flex items-center gap-1 transition-all duration-200 active:text-dark-gold icon-wrapper text-gold"
                onClick={()=> setPriceState(!priceState)}
            >
                <h3 className="text-2xl max-[610px]:text-lg max-[380px]:text-sm">Price</h3>

                <Image 
                    className={cn('bg-gold rounded-full transition-all duration-200 max-[610px]:w-[15px] max-[610px]:h-[15px]', {
                        ['-rotate-180']: priceState,
                        ['rotate-0']:   !priceState
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