import cn from "classnames";
import { ReactNode } from "react";

export const InventoryList = ({children}: {children: ReactNode})=> {
	return (
		<ul className={cn(
			"overflow-x-hidden mb-6",
			"grid grid-cols-[repeat(auto-fit,minmax(200px,400px))]",
			"justify-center content-start",
			"gap-x-6 gap-y-6 pt-10 max-[390px]:px-4"
		)}>
			{children}
		</ul>
	)
}