import { DiskImg, MaskBody, BtnBar } from "./components/index";
import cn from "classnames";
import { revealText } from "./components/revealText";

export const ShopInfo = ()=> {
	return (
		<section className={cn(
			"flex justify-between items-center",
			"mb-60 pr-10 max-[800px]:pr-5",
			"max-[550px]:px-3 max-[670px]:mb-36",
			"max-[670px]:pr-2"
		)}>
			<DiskImg />
			<div className="flex flex-col items-end h-full gap-10 max-[670px]:gap-5 max-[580px]:w-[35%] max-[420px]:w-[50%]">
				<MaskBody revealText={revealText}>
				Grab an official license to use <span className="text-blue-500">Ewenli’s beats</span> — whether you&apos;re dropping singles, albums, or sync deals.
				<span className="text-blue-500"> No gimmicks</span> — just clean rights and industry-grade sound ready to move.
				</MaskBody>
				<BtnBar />
			</div>
		</section>
	)
}