import cn from "classnames";
import { ServiceTitle, Cards } from "./components/index";

export const ServiceCards = ()=> {
	return (
		<section className={cn(
			"w-full h-fit flex flex-col",
			"items-center gap-16 mb-50",
			"max-[960px]:mb-40"
		)}>
			<ServiceTitle />
			<Cards />
		</section>
	)
}