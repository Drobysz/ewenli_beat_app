// Props
import { HTMLMotionProps } from 'framer-motion';

export interface AuthBtnProps extends HTMLMotionProps<'button'> {
    btnType: 'login' | 'register';
};