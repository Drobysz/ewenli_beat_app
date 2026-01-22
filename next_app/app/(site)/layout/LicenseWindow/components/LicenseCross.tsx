import { SiteContext } from "@/app/context/site.context";
import { useContext } from "react";
import { Cross } from "@/components/index";

export const LicenseCross = ()=> {
	const { setModalWindow } = useContext(SiteContext);

	return (
		<Cross
			className="absolute right-3 top-3"
			onClick={()=> setModalWindow('none')}
			width={32}
			height={32}
		/>
	)
}