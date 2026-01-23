import { DiskImg, MaskBody, BtnBar } from "./components/index";
import cn from "classnames";
import { revealText } from "./components/revealText";

export const ShopInfo = ()=> {
	return (
		<section className={cn(
			"grid grid-cols-2 items-center",
			"mb-60 pr-10 max-[800px]:pr-3",
			"max-[670px]:pr-3 max-[670px]:mb-36",
			"max-[550px]:px-3"
		)}>
			<DiskImg />
			<div className={cn(
				"flex flex-col items-end gap-10",
				"w-full h-fit self-center",
				"max-[670px]:gap-5",
				"max-[420px]:gap-0.5"
			)}>
				<MaskBody revealText={revealText}>
					Grab an official license to use <span className="text-blue-500">Ewenli&apos;s beats</span> — whether you&apos;re dropping singles, albums, or sync deals.
					<span className="text-blue-500"> No gimmicks</span> — just clean rights and industry-grade sound ready to move.
				</MaskBody>
				<BtnBar />
			</div>
		</section>
	)
}