'use client'

// Props
import { FC, useEffect } from "react";
import { BtnProps } from "./Btn.props";

// Fonst
import { impact, courier_prime, bebas_neue } from "@/fonts/fonts";

// Dependencies
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import cn from "classnames";

// Components
import Image from "next/image";

// Hooks
import { useRouter } from "next/navigation";
import { useContext } from "react";

// Context
import { AppContext } from "@/app/context/app.context";

// Fetch function
import { deleteProductFromBasket, setProductToBasket } from "@/helpers/basketRequest";
import { createStripeSession } from "@/helpers/stripeRequest";

export const CustomBtn: FC<BtnProps> = ({size='medium', color, children, idx, stripe_price_id, icon='none', btnType='link', link='#', rgb=false, setDisplayState})=> {
    const { token } = useContext(AppContext);

    const router = useRouter();

    const colorSet = [ '#13FFAA', '#1E67C6', '#CE84CF', '#DD335C' ];
    const RGBcolor = useMotionValue(colorSet[0]);
    const border = useMotionTemplate`1px solid ${RGBcolor}`;
    const boxShadow = useMotionTemplate`0px 4px 25px ${RGBcolor}`;

    useEffect(()=>{
        animate(RGBcolor, colorSet, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror'
        })
    }, []);

    async function handleBtnClick () {
        switch (btnType) {
            case 'basket':
                if (token)
                    setProductToBasket(token, idx!);

                break
            case 'delete':
                if (token)
                    deleteProductFromBasket(token, idx!);

                if(setDisplayState)
                    setDisplayState(false); 

                break
            case 'link':
                if (link !== '#')
                    router.push(link)

                break
            case 'buy':
                const stripeUrl = await createStripeSession(stripe_price_id!)
                router.push(stripeUrl);

                break
        }
    };

    return (
        <motion.div  
            onClick={handleBtnClick}
            whileHover={{scale: 1.05}}
            whileTap={{rotate: "2.5deg", scale: 0.95}}
            transition={{
                duration: 0.125,
                ease: 'backInOut'   
            }}
            style={{
                border: rgb ? border : undefined,
                boxShadow: rgb ? boxShadow : undefined
            }}
            className={cn('flex items-center justify-center gap-[3px] cursor-pointer',{
                // Sizes
                ['text-lg rounded-lg px-6 py-3 max-h-3']: size==='small',

                ['text-xl rounded-xl px-[0.563rem] py-1.5']: size==='medium',

                ['text-6xl rounded-3xl px-[1.375rem] py-2.5 max-[1055px]:text-2xl max-[1055px]:rounded-2xl max-[1055px]:px-[0.938rem] max-[1055px]:py-1']: size==='large',

                // Colors
                [cn(impact.className, 'text-black bg-white')]: color==='white',

                [cn('text-white bg-blue rounded-xl hover:bg-blue/50 hover:text-white/50 active:scale-97 active:rotate-1 transition-all duration-300', bebas_neue.className)]: color==='blue',

                [cn(courier_prime.className,'text-white bg-transparent backdrop-blur-2xl border-2 border-gray-700 min-[1280px]: px-0 py-0')]: color==='gray-ghost',

                [cn('text-blue rounded-b-md bg-transparent border-1 border-blue px-2', bebas_neue.className)]: color==='blue-ghost',

                [cn('text-red-proj rounded-tr-md border-1 border-red-proj text-xl', bebas_neue.className)]: color==='red-ghost',

                //  Icon and Type conditions
                ['hidden rotate-180 max-[710px]:block']: icon === 'arrow',
                ['active:border-green-500']: btnType === 'basket',

            })}
        >
            {children}

            {/* Condition for icon presence */}
            {
                icon !== 'none' && (
                    <Image 
                        src={`./${icon}.svg`} 
                        width={26} 
                        height={26} 
                        alt="icon" 
                        onClick={handleBtnClick}
                    />
                )
            }
        </motion.div>
    );
};