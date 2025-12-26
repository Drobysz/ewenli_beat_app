import { bagel_fat_one } from "@/fonts/fonts";
import { Carousel } from "./components/Carousel";
import cn from "classnames";

export const WorkSamples = ()=> {
	return (
		<section className={cn(
			"w-full flex flex-col",
			"gap-[50px] mb-40"
		)}>
			<h2 className={cn(
				"text-6xl w-full",
				"text-center text-white",
				bagel_fat_one.className
			)}>
				My work examples
			</h2>
			<Carousel />
		</section>
	)
}