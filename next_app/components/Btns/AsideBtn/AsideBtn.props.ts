import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export interface AsideBtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	color: 'grey' | 'white';
	isOpened: boolean;
	setBtn: (v: boolean)=> void;
	className: string;
};