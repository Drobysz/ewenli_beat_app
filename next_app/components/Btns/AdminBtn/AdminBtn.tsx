"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { inter } from '@/fonts/fonts';
import cn from "classnames"
import { SiteContext } from '@/app/(site)/context/site.context';
import Link from 'next/link';

export const AdminBtn = ()=> {
	const [isHovered, setHover] = useState(false);
	const {sessionData} = useContext(SiteContext);
	const isConcealed = sessionData != undefined && sessionData!.role == 'admin' ? false : true;

	return (
		<Link 
			href="/adm_panel"
			className='w-[85px]'
		>
			<motion.button
				className={cn(
					'rounded-full bg-green-light overflow-x-hidden pl-2 mb-1.5',
					'active:scale-95 active:opacity-70 active:border-2 active:border-white duration-300 transition-all',
					{['hidden']: isConcealed}
				)}
				onMouseEnter={()=> setHover(true)}
				onMouseLeave={()=> setHover(false)}
				style={{
					width: isHovered ? 85 : 35,
					height: 35
				}}
			>
				<div 
					className='flex items-center gap-10'
					style={{
						transform: isHovered ? "translateX(-55px)" : "translateX(0)",
						transition: "transform 0.3s ease"
					}}
				>
					<Image
						className='transition-all'
						src="./admin_symb.svg"
						width={20}
						height={20}
						alt='admin'
					/>
					<h3 
						className={cn(
							inter.className,
							'text-white text-[0.65rem] whitespace-nowrap transition-all'
						)}
					>
						admin panel
					</h3>
				</div>
			</motion.button>
		</Link>
	)
}