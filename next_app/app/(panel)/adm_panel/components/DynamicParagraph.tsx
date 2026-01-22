import words from "./words.json";
import cn from 'classnames';
import { TPwords } from "@/components/index";
import { cinzel, courier_prime } from "@/fonts/fonts";

export const DynamicParagraph = ()=> {
	return (
		<p className={cn("w-[50%]", cinzel.className)}>
			My dearest lord with the admin panel You can
			do many a lot of wonderful things and
			completely control your shop.<br /><br />

			<span className="block h-[60px]">
				Namely you can 
				<TPwords
					className={cn(
						"text-blue text-xl",
						courier_prime.className
					)}
					words={words}
					delay={5000}
				/>
			</span>
		</p>
	)
}