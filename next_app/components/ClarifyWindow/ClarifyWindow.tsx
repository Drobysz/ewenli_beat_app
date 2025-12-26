'use client'

import cn from 'classnames';
import ClarifyWindowProps from './ClarifyWindow.props';
import styles from "./ClarifyWindow.module.scss";
import { ClarifyBtns } from "./components/Btns";
import { useContext } from 'react';
import { SiteContext } from '@/app/context/site.context';
import { doppelganger } from '@/fonts/fonts';

export const ClarifyWindow = ({ notification, handleClick }: ClarifyWindowProps)=> {
	const { isClarifyWindowOpen } = useContext(SiteContext);
	return (
		<div className={cn(
			styles.window, {
			["fixed"]: isClarifyWindowOpen,
			["hidden"]: !isClarifyWindowOpen
		})}>
			<p className={cn(
				styles.notification,
				"text-gray-50",
				doppelganger.className
			)}>
				{notification}
			</p>
			<ClarifyBtns handleClick={handleClick}/>
		</div>
	)
}