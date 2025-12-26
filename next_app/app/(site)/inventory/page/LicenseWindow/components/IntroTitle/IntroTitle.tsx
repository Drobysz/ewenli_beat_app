import Image from "next/image";
import cn from "classnames";
import { GratitudeTitle, LicenseTitle } from "./components/index";


export const IntroTitle = ()=> {
	return (
		<div className={cn(
			"mb-8 max-[500px]:mb-4 flex flex-col",
			"items-center gap-8 max-[500px]:gap-5"
		)}>
			<Image
				src='/mascot.png'
				alt="title_logo"
				width={144}
				height={144}
			/>
			<div className={cn(
				"flex flex-col gap-4",
				"max-[500px]:gap-2 text-white"
			)}>
				<GratitudeTitle />
				<LicenseTitle />
			</div>
		</div>
	)
}