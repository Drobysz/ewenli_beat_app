import { bagel_fat_one } from '@/fonts/fonts';
import cn from 'classnames';

export const MaskotText = ()=> {
	return (
		<p className={cn(
			"text-center text-white text-lg",
			"max-[820px]:text-md max-[820px]:max-w-[400px]",
			"max-w-[700px]",
			bagel_fat_one.className
		)}>
			Bold sounds, glitchy textures, and raw emotion — this is the sonic world crafted by Ewenli. Fusing elements of digicore, hyperpop, and 2010s pop nostalgia, each track is a chaotic yet melodic ride through distorted reality.
		</p>
	)
}