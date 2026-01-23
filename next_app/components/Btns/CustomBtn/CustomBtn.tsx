'use client'

// Props
import { useEffect } from "react";
import { BtnProps } from "./Btn.props";

// Fonst
import { impact, courier_prime, bebas_neue } from "@/fonts/fonts";

// Dependencies
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion';
import cn from "classnames";

// Components
import Image from "next/image";

// Hooks
import { redirect } from "next/navigation";

// Fetch function
import { deleteProductFromBasket, setProductToBasket } from "@/helpers/basketRequest";
import { createStripeSession } from "@/helpers/stripeRequest";

// Session
import { getSessionData } from "@/app/actions/sesssions";
import { UserSession } from "@/interfaces/UserData.interface";

// Styles
import styles from "./Btn.module.scss";

export const CustomBtn = ({
    size='medium', 
    color='gray-ghost', 
    children,
    className, 
    idx, 
    stripe_price_id, 
    icon='none', 
    btnType='link', 
    link='#', 
    rgb=false, 
    setDisplayState
}: BtnProps)=> {
    const colorSet  = [ '#13FFAA', '#1E67C6', '#CE84CF', '#DD335C' ];
    const RGBcolor  = useMotionValue(colorSet[0]);
    const border    = useMotionTemplate`1px solid ${RGBcolor}`;
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
        const sessionData: UserSession | undefined = await getSessionData();
        switch (btnType) {
            case 'basket':
                if (sessionData !== undefined)
                    setProductToBasket(sessionData.token!, idx!);
                break;
            case 'delete':
                if (sessionData !== undefined)
                    deleteProductFromBasket(sessionData.token!, idx!);

                if(setDisplayState)
                    setDisplayState(false); 
                break;
            case 'link':
                if (link !== '#')
                    redirect(link)
                break
            case 'buy':
                const stripeUrl = await createStripeSession(stripe_price_id!, sessionData!.email!);
                redirect(stripeUrl);
                break;
        }
    };

    return (
        <motion.button  
            onClick={handleBtnClick}
            whileHover={{scale: 1.05}}
            whileTap={{rotate: "2.5deg", scale: 0.95}}
            transition={{
                duration: 0.125,
                ease: 'backInOut'   
            }}
            style={{
                border:    rgb ? border : undefined,
                boxShadow: rgb ? boxShadow : undefined
            }}
            className={cn(styles.default, className, {
                // Sizes
                [styles.small]:  size === 'small',
                [styles.medium]: size === 'medium',
                [styles.large]:  size === 'large',

                // Colors
                [cn(impact.className, styles.white)]: color == 'white',
                [cn(
                    bebas_neue.className, styles.blue,
                    "bg-blue hover:bg-blue/50"
                )]: color == 'blue',
                [cn(courier_prime.className, styles.gray_ghost)]: color == 'gray-ghost',
                [cn(
                    bebas_neue.className, styles.blue_ghost,
                    "text-blue border-blue border-blue"
                )]: color == 'blue-ghost',
                [cn(
                    bebas_neue.className,
                    'text-red-proj border-red-proj',
                    styles.red_ghost
                )]: color == 'red-ghost',

                // Icons
                [styles.arrow]: icon     === 'arrow',
                [styles.basket]: btnType === 'basket',
                [styles.icon]: icon      != 'none'

            })}
        >
            {children}

            {icon !== 'none' && (
                <Image 
                    src={`./${icon}.svg`} 
                    width={26} 
                    height={26} 
                    alt="icon" 
                    onClick={handleBtnClick}
                />
            )}
        </motion.button>
    );
};