import { BeatBox } from "@/components/index"
import { Beat } from "@/interfaces/Products.interface"
import { BeatUrl } from "@/interfaces/s3ElementData.interface"

interface ItemsProps {
	purchasedBeats: Beat[]
	imgs: BeatUrl[]
}

export const Items = ({purchasedBeats, imgs}: ItemsProps)=> {
	return (
		<>
			{purchasedBeats!.length > 0 
				?
					purchasedBeats!.map( (beat, idx)=> (
						<BeatBox 
							key={idx} 
							beat={beat} 
							beatImg={imgs!.find( bimg => bimg.local_name.includes(beat.name + '.png') )!}  
							idx={idx} 
							mode="inventory" 
						/>
					))
				:
					<h2 className="text-white/30 text-5xl">
						Your Inventory is empty
					</h2>
			}
		</>
	)
}