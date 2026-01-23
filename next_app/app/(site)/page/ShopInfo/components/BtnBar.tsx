"use client";

import { CustomBtn, FullScreenSpin,  } from "@/components/index";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export const BtnBar = ()=> {
	const width = useWindowWidth();

	if (width === null) return <FullScreenSpin size="small" />;

	const size =
		width <= 670 ? "small" : width <= 960 ? "medium" : "large";

	return (
		<div className="flex items-center gap-3 max-[420px]:flex-col max-[420px]:gap-2">
			<CustomBtn 
				size={size}
				color="white"
			>
				telegram
			</CustomBtn>

			<CustomBtn 
				size={size}
				color="gray-ghost"
				link="/shop"
			>
				shop
			</CustomBtn>
		</div>
	)
}