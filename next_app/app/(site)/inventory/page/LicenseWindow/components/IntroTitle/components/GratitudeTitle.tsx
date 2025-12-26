import { avenir } from "@/fonts/fonts";
import cn from "classnames";

export const GratitudeTitle = ()=> {
	return (
		<h3 className={cn(
			"text-4xl text-center max-[705px]:text-3xl",
			"max-[600px]:text-2xl max-[500px]:text-xl",
			"max-[435px]:text-lgmax-[405px]:text-base",
			"max-[370px]:text-sm max-[336px]:text-xs",
			avenir.className
		)}>
			Thank for buying
			<span className="text-[#4152DF]"> MP3 </span> 
			license
		</h3>
	)
}