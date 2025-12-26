import { SiteContext } from "@/app/context/site.context";
import { useContext } from "react";
import cn from "classnames";

export const ClarifyBtns = ({ handleClick }: {handleClick: ()=> void})=> {
	const { sessionData, setClarifyWindow } = useContext(SiteContext);

	if (!sessionData?.token)
		return null;

	return (
		<form>
			<input
				type="hidden"
				name="token"
				value={sessionData.token}
			/>
			<button
				type="submit"
				onClick={handleClick}
			>
				confirm
			</button>
			<button
				className={cn(
					
				)}
				type="submit"
				onClick={()=> setClarifyWindow(false)}
			>
				cancel
			</button>
		</form>
	)
}