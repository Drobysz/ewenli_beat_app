'use client'

// Props
import { FC } from "react";
import { BeatBtnsProps } from "./BeatBtns.props"

// Components
import { CustomBtn } from "@/components/index";

// Context
import { AppContext } from "@/app/context/app.context";

// Hooks
import { useContext } from "react";

// Fonts
import { bebas_neue } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

export const BeatBtns: FC<BeatBtnsProps> = ({ beat, className })=> {
    const { token, isReady } = useContext(AppContext);

    if (!isReady) {
        return null;
    }

    const isLoggedIn = typeof token === 'string';

    return (
        <div className={cn("gap-4 items-center", className)}>
            <h4 className={cn("text-gold text-2xl max-[612px]:text-xl", bebas_neue.className)}>
                {beat.price} €
            </h4>
            {
                isLoggedIn 
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

                        <CustomBtn
                            size="small"
                            color="gray-ghost"
                            icon="basket"
                            btnType="basket"
                            idx={beat.id}
                        />
                    </>
                    
                :
                    <h4 className="text-gray-50 text-xl">Sign Up to buy</h4>
            }
            
        </div>
    );
};