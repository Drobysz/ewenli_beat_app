import { SiteContext } from "@/app/context/site.context";
import { ReactNode, useContext } from "react";
import cn from "classnames";

export const LicenseWindowBody = ({children}: {children: ReactNode})=> {
	const { currentModalWindow } = useContext(SiteContext);
	return (
		<div className={cn(
			"top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
			"z-10 backdrop-blur-lg bg-gray-300/60 py-11 px-5",
			"rounded-3xl border-1 border-zinc-700 h-fit w-[80%]", {
			['hidden']: currentModalWindow != 'License',
			['fixed']:  currentModalWindow == 'License'
		})}>
			{children}
		</div>
	)
}