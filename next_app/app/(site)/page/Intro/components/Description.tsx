import { avenir } from "@/fonts/fonts";
import cn from "classnames";

export const IntroDescription = ()=> {
	return (
		<p className={cn(
			"w-[508px] text-center text-transparent",
			"bg-gradient-to-br from-white to-gray-50",
			"bg-clip-text max-[690px]:text-xs",
			"max-[690px]:w-[350px] max-[425px]:text-[0.8rem]",
			"max-[425px]:w-[300px]", avenir.className
		)}>
			This isn’t just music — it’s a signal. Glitchy, punchy, future-born. Created to disrupt, not decorate. Each beat breaks the mold. Each drop rewires the rules. Welcome to the audio rebellion.
		</p>
	)
}