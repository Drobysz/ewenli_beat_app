import { HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

export interface BtnProps extends HTMLMotionProps<'button'> {
    size?: 'small' | 'medium' | 'large',
    color: 'white' | 'blue' | 'gray-ghost' | 'blue-ghost' | 'red-ghost',
    icon?: 'basket' | 'arrow',
    btnType?: 'basket' | 'delete' | 'link' | 'buy',
    link?: string,
    children?: ReactNode,
    idx?: number,
    stripe_price_id?: string,
    rgb?: boolean,
    setDisplayState?: (displayState: boolean)=> void;
};