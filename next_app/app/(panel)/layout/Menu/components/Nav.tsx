'use client'

import Link from "next/link";
import cn from 'classnames';
import Image from "next/image";
import { jersey_25 } from "@/fonts/fonts";
import { useContext } from "react";
import { PanelContext } from "@/app/(panel)/context/panel.context";

export const Nav = ()=> {
	const { showTitle } = useContext(PanelContext);
	const admPanelCategs = [
		{link: '', label: 'introduction', icon: 'intro.svg', alter: 'intro icon'},
		{link: 'beat_workshop', label: 'beat workshop', icon: 'folder.svg', alter: 'folder icon'}
	];

	return (
		<nav className={cn({
			["px-0"]: !showTitle,
			["px-2"]: showTitle,
		})}>
			<ul className="flex flex-col">
				{admPanelCategs.map(({link, label, icon, alter}, id)=> (
					<li
						key={`k-${id}`} 
						className={cn(
							"text-xl max-[660px]:text-sm text-[#C6C3C3]",
							"cursor-pointer rounded-xs p-1",
							"transition-colors duration-300",
							"hover:bg-gray-800 hover:text-gold ",
							jersey_25.className
						)}
					>
						<Link
							href={`/adm_panel/${link}`}
							className="cursor-pointer w-full"
						>
							{showTitle
								? (<p>{label}</p>)
								: (
									<Image 
										src={`/adm_panel/${icon}`}
										width={30}
										height={30}
										alt={alter}
									/>
								)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}