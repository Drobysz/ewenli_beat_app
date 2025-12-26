import { SiteContext } from "@/app/context/site.context";
import { useContext } from "react";
import cn from "classnames";

export const LicenseTitle = ()=> {
	const { curentBeatInLicense } = useContext(SiteContext);

	return (
		<p className={cn(
			"text-lg text-center",
			"max-[705px]:text-base",
			"max-[600px]:text-xs",
			"max-[500px]:text-[0.625rem]",
			"max-[435px]:text-[0.5rem]",
			"max-[405px]:text-[0.35rem]"
		)}>
			{curentBeatInLicense.category} &quot;{curentBeatInLicense.name}&quot;
		</p>
	)
}