'use client'

import { AdmPnlBtnsProps } from "./AdmPnlBtns.props";
import Image from "next/image";
import { motion } from "framer-motion";
import cn from 'classnames';
import { useState } from "react";
import styles from "./AdmPnlBtns.module.scss";
import { TitleBody, ContentSpace } from "./components/index";
import { btnCssParams, sizes } from "./config";


export const AdmPnlBtns = ({
	func,
	size = 'large',
	extend_group_items = false,
	setClick
}: AdmPnlBtnsProps)=> {
	const [isHovered, setHover] = useState(false);

	const isClickable = setClick !== undefined;
	const btnFrame = extend_group_items
				? 'fit'
				: sizes.extended_lenght[size];
	const btnWidth = isHovered
				? sizes.extended_lenght[size]
				: sizes.lenght[size];

	return (
		<motion.div style={{ width: btnFrame }}>
			<motion.button
				className={cn(
					styles.btn,
					btnCssParams[func].color,
				)}

				onMouseEnter={()=> setHover(true)}
				onMouseLeave={()=> setHover(false)}
				onClick={()=> isClickable && setClick(prev=> !prev)}

				style={{
					width: btnWidth,
					height: sizes.lenght[size],
					paddingLeft: sizes.lenght[size] / 4.5
				}}
			>
				<ContentSpace
					spacing={sizes.spacing[size]}
					isHovered={isHovered}
					translation={sizes.translate[size]}
				>
					<Image
						className='transition-all'
						src={`/adm_panel_btn_icons/${btnCssParams[func].icon}`}
						width={sizes.icon_size[size]}
						height={sizes.icon_size[size]}
						alt='admin panel icon'
					/>
					<TitleBody size={size}>
						{func}
					</TitleBody>
				</ContentSpace>
			</motion.button>
		</motion.div>
	)
}