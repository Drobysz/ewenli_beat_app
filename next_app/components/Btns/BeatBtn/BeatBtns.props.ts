// Props
import { Beat } from '@/interfaces/Products.interface';
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface BeatBtnsProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    beat: Beat;
};