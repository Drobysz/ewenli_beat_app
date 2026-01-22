'use client'

import { AsideBtn } from '@/components/index';
import { PanelContext } from '@/app/(panel)/context/panel.context'; 
import { useContext } from 'react';
import { courier_prime } from '@/fonts/fonts';
import cn from 'classnames';

export const Title = ()=> {
	const { showTitle, isMenuOpened, setMenuOpen } = useContext(PanelContext);

	return (
		<div className={cn(
			'grid gap-1 h-10 items-center min-w-[200px]',
			showTitle
				? 'grid-cols-[auto_1fr] max-[670px]:min-w-[100px]'
				: 'grid-cols-[1fr]',
			!showTitle && 'min-w-fit'
		)}>
			<AsideBtn
				color='grey'
				isOpened={isMenuOpened}
				setBtn={setMenuOpen}
				className={cn({
					['justify-self-start']: showTitle,
					['justify-self-center']: !showTitle
				})}
			/>
			{showTitle && 
				<h2 className={cn(
					"text-center text-[#C6C3C3] text-2xl",
					"max-[745px]:text-lg max-[575px]:text-sm",
					"justify-self-center overflow-hidden",
					courier_prime.className
				)}>
					Admin Panel
				</h2>
			}
		</div>
	)
}