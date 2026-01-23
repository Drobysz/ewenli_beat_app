import Image from "next/image";
import cn from "classnames";
import { RotateObjHorizontally } from "@/components/index";

export const DiskImg = ()=> {
	return (
		<RotateObjHorizontally className={cn(
			"rounded-full aspect-square p-8 justify-self-center",
			"max-[715px]:p-7 max-[550px]:p-4",
			"max-[420px]:p-0"
		)}>
			<Image 
				src={'/swrc.png'} 
				width={476} 
				height={476}
				className={cn(
					"hover:shadow-[0px_0px_10px_5px_#953396]",
					"rounded-full w-full max-w-[476px] min-[1055px]:w-[476px]",
					"max-[1055px]:w-[320px] max-[1055px]:h-[320px]",
					"max-[670px]:w-[255px] max-[670px]:h-[255px]",
					"max-[550px]:w-[200px] max-[550px]:h-[200px]",
					"max-[420px]:w-[150px] max-[420px]:h-[150px]"
				)}
				alt="Telegram & Shop promo"
			/>
		</RotateObjHorizontally>
	)
}