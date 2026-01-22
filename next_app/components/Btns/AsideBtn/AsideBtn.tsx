'use client'

import { useState } from "react"
import { AsideBtnProps } from "./AsideBtn.props"
import cn from 'classnames' 

export const AsideBtn = ({ color, isOpened, setBtn, className }: AsideBtnProps)=> {
	const [isHover, setHover] = useState(false);
	const colors = {
		grey: '[#C6C3C3]',
		white: 'white'
	}
	const line = `h-[0.08rem] w-full m-0 border-0 bg-${isHover ? 'gold' : colors[color]} bg-[#C6C3C3] transition-all duration-500`;
	const rotateCond1 = {['absolute top-1/2 left-0 rotate-45']: isOpened}
	const rotateCond2 = {['absolute top-1/2 left-0 -rotate-45']: isOpened}

	return (
		<button
			className={cn('w-6 h-6 rounded-sm relative flex',
						  'hover:scale-105 hover:border-gold',
						  'ease-in-out transition-colors duration-500',
						  'flex-col justify-between',
						  'border-2 py-[0.3rem] px-1',
						  'cursor-pointer border-[#C6C3C3]',
						  {['justify-center']: isOpened},
						  className
						)}
			onMouseEnter={()=> setHover(true)}
			onMouseLeave={()=> setHover(false)}
			onClick={()=> setBtn(!isOpened)}
		>
			<hr className={cn(line, rotateCond1)} />
			<hr className={cn(line, rotateCond2)} />
			{!isOpened && <hr className={line} />}
		</button>
	)
}