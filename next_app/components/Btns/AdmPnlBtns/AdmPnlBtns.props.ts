import { DetailedHTMLProps, ButtonHTMLAttributes, Dispatch } from 'react';

export interface AdmPnlBtnsProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	func: 'create' | 'delete' | 'modify';
	size?: 'small' | 'middle' | 'large';
	extend_group_items?: boolean;
	setClick?: Dispatch<React.SetStateAction<boolean>>;
};