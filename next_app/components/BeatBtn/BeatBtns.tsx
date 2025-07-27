'use client'

// Props
import { FC } from "react";
import { BeatBtnsProps } from "./BeatBtns.props"

// Components
import { CustomBtn } from "@/components/index";

// Hooks
import { useContext } from "react";

// Fonts
import { bebas_neue } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

// Context
import { SiteContext } from "@/app/(site)/context/site.context";

export const BeatBtns: FC<BeatBtnsProps> = ({ beat, className })=> {
    const { sessionData } = useContext(SiteContext);

    return (
        <div className={cn("gap-4 items-center", className)}>
            <h4 className={cn("text-gold text-2xl max-[612px]:text-xl", bebas_neue.className)}>
                {beat.price} €
            </h4>
            {
                sessionData !== undefined 
                ?
                    <>
                        <CustomBtn
                            size="small"
                            color="blue"
                            btnType="buy"
                            stripe_price_id={beat.stripe_price_id}
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
                    <h4 className="text-gray-50 text-xl max-[580px]:text-base">Sign Up to buy</h4>
            }
            
        </div>
    );
};