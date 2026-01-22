import { CustomBtn } from "@/components/index";

export const BtnBar = ()=> {
	return (
		<div className="flex gap-3 max-[420px]:flex-col max-[420px]:gap-2">
			<CustomBtn 
				size="medium"
				color="white"
			>
				telegram
			</CustomBtn>

			<CustomBtn 
				size="medium" 
				color="gray-ghost"
				link="/shop"
			>
				shop
			</CustomBtn>
		</div>
	)
}