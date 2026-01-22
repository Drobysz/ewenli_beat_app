import { avenir, bagel_fat_one } from "@/fonts/fonts"
import { BeatBoxTitleProps } from "./Title.interface"
import cn from 'classnames'

export const BeatBoxTitle = ({name, category, isHovered}: BeatBoxTitleProps)=> {
	return (
		<div className={cn(
			"flex gap-1 items-end text-white",
			"max-[580px]:items-center",
			"transition-all duration-500", {
			['drop-shadow-text-link']: isHovered,
		})}>
			<h3 className={cn(
				'text-xl max-[580px]:text-base max-[580px]:leading-4',
				'max-[420px]:text-xs', 
				bagel_fat_one.className, {
				['text-link-blue/70']: isHovered,
			})}>
				{name}
			</h3>
			<span className={cn({
				['text-white/40']: isHovered
			})}> | </span>
			<span className={cn(
				'text-center h-fit',
				'w-fit rounded-full bg-gray-100 border',
				'border-white/60 px-0.5 mb-0.5',
				'py-px text-[0.48rem] max-[580px]:mt-1',
				avenir.className, {
				['text-white/60 bg-gray-100/60']: isHovered
			})}>
				{category}
			</span>
		</div>
	)
}