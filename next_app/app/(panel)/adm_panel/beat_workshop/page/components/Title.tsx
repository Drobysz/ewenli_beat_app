import { tronecal, jersey_25 } from "@/fonts/fonts";
import cn from 'classnames';

export const WSTitle = ()=> {
	return (
		<h1 className={cn(
			"text-3xl text-blue text-center flex gap-2 content-end"
		)}>
			<span className={cn(
				"font-bold",
				jersey_25.className
			)}>
				Workshop of
			</span>
			<span className={cn(
				"text-2xl pt-0.5",
				tronecal.className
			)}>
				 beats
			</span>
		</h1>
	)
}