import Image from "next/image";
import cn from "classnames";

export const TermsZone = ()=> {
	return (
		<div className={cn(
			"w-fit  gap-x-[5%] gap-y-8",
			"grid grid-cols-3",
			"max-[970px]:grid-cols-2",
			"max-[620px]:grid-cols-1",
			"max-[620px]:self-center",
			"max-[620px]:overflow-y-scroll",
			"max-[620px]:h-[200px]"
		)}>
			{usageTerms.map( (term, idx)=> (
				<div 
					key={`${idx}-term`}
					className="flex items-center gap-4"
				>
					<Image
						className={cn(
							"opacity-50 max-[970px]:w-5",
							"max-[970px]:h-5"
						)}
						src={term.icon}
						alt="term_icon"
						width={25}
						height={25}
					/>
					<h4 className={cn(
						"text-zinc-600",
						"font-bold text-xs"
					)}>
						{term.title}
					</h4>
				</div>
			) )}
		</div>
	)
}

const usageTerms = [
    {
        icon: "/license_icons/RECORDING.svg",
        title: "USED FOR MUSIC RECORDING"
    },
    {
        icon: "/license_icons/COPIES.svg",
        title: "DISTRIBUTE UP TO 2,000 COPIES"
    },
    {
        icon: "/license_icons/STREAMS.svg",
        title: "500,000 ONLINE AUDIO STREAMS"
    },
    {
        icon: "/license_icons/VIDEO.svg",
        title: "1 MUSIC VIDEO"
    },
    {
        icon: "/license_icons/LIVE.svg",
        title: "FOR PROFIT LIVE PERFORMANCES"
    },
    {
        icon: "/license_icons/RADIO.svg",
        title: "RADIO BROADCASTING RIGHTS (2 STATIONS)"
    },
];