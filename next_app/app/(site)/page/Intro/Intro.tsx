import cn from "classnames";
import { IntroDescription, IntroTitle } from "./components/index";
import { CustomBtn, AuroraRGB } from "@/components/index";

export const Intro = ()=> {
	return (
		<section className={cn(
		"w-full h-[800px] flex flex-col",
		"justify-center items-center",
		" gap-5 z-1 relative mb-20",
		"pb-40 max-[690px]:gap-3"
		)}>
			<IntroTitle />
			<IntroDescription />
			<CustomBtn
				rgb
				color="gray-ghost"
				size="medium"
				link="/shop"
			>
				boutique
			</CustomBtn>
			<AuroraRGB />
		</section>
	)
}