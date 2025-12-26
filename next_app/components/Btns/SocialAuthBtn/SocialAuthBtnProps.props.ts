// Props
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";

export interface SocialAuthBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    btnType: 'google' | 'github';
};