'use client'

import { CustomBtn } from "@/components/index";
import { useContext } from "react";
import { SiteContext } from "@/app/context/site.context";
import { bebas_neue } from "@/fonts/fonts";
import cn from 'classnames';

export const BeatBtns = ({ 
    className='',
    price 
}: {
    className?: string,
    price: number
})=> {
    const { sessionData } = useContext(SiteContext);

    return (
        <div className={cn("gap-4 max-[620px]:gap-2 items-center", className)}>
            <h4 className={cn("text-gold text-2xl max-[612px]:text-xl", bebas_neue.className)}>
                {price} €
            </h4>
            {sessionData !== undefined 
                ?
                    <>
                        <CustomBtn
                            size="small"
                            color="blue"
                            btnType="buy"
                            stripe_price_id='1000'
                        >
                            buy
                        </CustomBtn>
                        {/* <CustomBtn
                            size="small"
                            color="gray-ghost"
                            icon="basket"
                            btnType="basket"
                            idx={beat.id}
                        /> */}
                    </>
                :
                    <h4 className={cn(
                        "text-gray-50 text-xl",
                        "max-[580px]:text-sm",
                        "max-[530px]:text-[0.6rem]",
                        "max-[350px]:text-[0.45rem]"
                    )}>
                        Sign Up to buy
                    </h4>
            }
        </div>
    );
};