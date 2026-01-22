'use client'

import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { DetailedHTMLProps, HTMLAttributes, useContext, useMemo } from "react";
import { WorkshopContext } from "../../context/workshop.context";
import { BeatBox, GreyLine } from "@/components";
import cn from 'classnames';

interface WSListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    beats:      Beat[];
    beatImages: BeatUrl[];
    beatFiles:  BeatUrl[];
}

export const WSBeatList = ({
	beats,
	beatImages,
	beatFiles,
}: WSListProps)=> {
	const { searchValue } = useContext(WorkshopContext);
	const filteredBeats: Beat[] = useMemo(()=>
		searchValue !== '' 
            ? beats.filter( beat => beat.name.toLowerCase().includes(searchValue.toLowerCase()) ) 
            : beats
		, [searchValue]
	);

	return (
		<section className="h-full w-full py-10 px-5 max-[510px]:py-3 max-[510px]:px-2">
			<GreyLine />
			<ul className={cn(
				"h-[65vh] w-full overflow-y-scroll overflow-x-hidden",
				"mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))]",
				"justify-center content-start gap-x-6 gap-y-6"
			)}>
				{filteredBeats.map((beat, idx)=>
					<BeatBox
						key={`beat-${idx}`}
                        beat={beat} 
                        beatImg={beatImages.find( bimg => bimg.local_name.includes(beat.name) )!} 
                        beatFile={beatFiles.find( bfile => bfile.local_name.includes(beat.name) )!} 
                        idx={idx}  
                        mode='workshop'
					/>
				)}
			</ul>
			<GreyLine />
		</section>
	)
}