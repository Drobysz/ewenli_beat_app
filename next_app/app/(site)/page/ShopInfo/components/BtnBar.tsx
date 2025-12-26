import { CustomBtn } from "@/components/index";

export const BtnBar = ()=> {
	return (
		<div className="flex gap-5 max-[420px]:flex-col max-[420px]:gap-2">
			<CustomBtn 
				size="large"
				color="white"
			>
				telegram
			</CustomBtn>

			<CustomBtn 
			size="large" 
			color="gray-ghost"
			link="/shop"
			>
				shop
			</CustomBtn>
		</div>
	)
}