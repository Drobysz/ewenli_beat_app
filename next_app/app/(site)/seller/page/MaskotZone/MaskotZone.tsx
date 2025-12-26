import cn from 'classnames';
import { MaskotImage, MaskotText } from "./components/index";

export const MaskotZone = ()=> {
	return (
		<div className={cn(
			"h-fit pt-10 z-20 w-full",
			"flex flex-col gap-6 mb-30",
			"justify-center items-center",
			"max-[820px]:gap-16"
		)}>
			<MaskotImage />
			<MaskotText />
		</div>
	)
}