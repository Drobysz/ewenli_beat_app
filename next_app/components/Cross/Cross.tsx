import Image from "next/image";
import cn from 'classnames';
import styles from "./Cross.module.scss";
import { CrossProps } from "./Cross.props";

export const Cross = ({
	className,
	width,
<<<<<<< Updated upstream
	heigth
=======
	height,
	...props
>>>>>>> Stashed changes
 }: CrossProps)=> {
	return (
		<Image
			className={cn(
				styles.cross,
				className
			)}
			src='/cross.svg'
			width={width}
<<<<<<< Updated upstream
			height={heigth ?? width}
=======
			height={height ?? width}
>>>>>>> Stashed changes
			alt='cross'
			{...props}
		/>
	)
}