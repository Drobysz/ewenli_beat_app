import cn from "classnames";
import { ReactNode } from "react";

export const CancelTitle = ({children}: {children: ReactNode})=> {
	return (
		<h1 className={cn(
			"text-zinc-700 text-7xl",
			"max-[1060px]:text-6xl",
			"max-[780px]:text-4xl",
			"max-[520px]:text-2xl"
		)}>
			{children}
		</h1>
	)
}