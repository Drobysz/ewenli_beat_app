import { doppelganger, impact } from "@/fonts/fonts";
import { logoutClient } from "@/app/actions/auth";
import styles from "./LogoutForm.module.scss";
import cn from 'classnames';
import { SiteContext } from "@/app/context/site.context";
import { useContext } from "react";

export const LogoutForm = ()=> {
	const { sessionData } = useContext(SiteContext);

	if (!sessionData?.token) {
        return null;
    }

	return (
		<form 
			className="grid grid-cols-[1fr_auto] gap-2"
			action={logoutClient}
		>
			<h2 className={cn("text-white/40 text-xl", doppelganger.className)}>
				Do you want to log out? Press this button
			</h2>
			<input
				type="hidden"
				name="token"
				value={sessionData.token}
			/>
			<button
				className={cn(
					styles.logout,
					"hover:border-red-burgundy",
					"hover:text-red-burgundy",
					"border-red-proj text-red-proj",
					impact.className
				)}
				type="submit"
			>
				Log out
			</button>
		</form>
	)
}