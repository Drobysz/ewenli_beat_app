import { audiowide, bebas_neue } from "@/fonts/fonts";
import cn from "classnames";

export const ServiceTitle = ()=> {
	return (
		<div className={cn(
			"w-full flex justify-center content-center",
			"gap-8 text-2xl max-[945px]:px-10",
			"max-[795px]:flex-col max-[795px]:items-center",
			"max-[795px]:gap-3 max-[570px]:text-xl"
		)}>
			<h2 className={cn(
				"text-white",
				audiowide.className
			)}>
				What kind of products i propose?
			</h2>
			<h2 className={cn(
				"text-gray-50",
				bebas_neue.className
			)}>
				Everything you need to build great products on the web
			</h2>
		</div>
	)
}