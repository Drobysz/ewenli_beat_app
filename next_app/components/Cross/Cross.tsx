import Image from "next/image";
import cn from 'classnames';
import styles from "./Cross.module.scss";
import { CrossProps } from "./Cross.props";

export const Cross = ({ 
	className,
	width,
	heigth
 }: CrossProps)=> {
	return (
		<Image
			className={cn(
				styles.cross,
				className
			)}
			src='/cross.svg'
			width={width}
			height={heigth ?? width}
			alt='cross'
		/>
	)
} 