import { RotateBtnProps } from "./RotateBtn.props";
import Image from "next/image";
import cn from "classnames";

export const RotateBtn = ({isRotated, setRotate}: RotateBtnProps)=> {
	return (
		<Image 
			src='/arrowWhite.svg'
			width={34}
			height={34}
			alt="arrow"
			className={cn("rounded-full border-2 border-gray-50 transition-all duration-300 hidden max-[580px]:w-[17px] max-[580px]:h-[17px] max-[730px]:block", {
				['-rotate-90']: isRotated,
				['rotate-0']:   !isRotated,
			})}
			onClick={()=> setRotate(!isRotated)}
		/>
	)
}