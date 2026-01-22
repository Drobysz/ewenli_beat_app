import { bagel_fat_one } from "@/fonts/fonts";
import cn from "classnames";

export const IntroTitle = ()=> {
	return (
		<h1 className={ cn(
			"flex flex-col items-center text-5xl",
			"text-transparent bg-linear-to-br from-gold to-pinkish",
			"bg-clip-text leading-18 max-[690px]:text-3xl",
			"max-[690px]:leading-12 max-[550px]:leading-10",
			"max-[425px]:text-2xl max-[425px]:leading-8",
			bagel_fat_one.className
		)}>
			<span>SHOP of Licences for Beats</span> 
			<span>Samples</span>
		</h1>
	)
}