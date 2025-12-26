import cn from 'classnames';
import { BeatBox } from '@/components';
import { Beat } from '@/interfaces/Products.interface';
import { BeatUrl } from '@/interfaces/s3ElementData.interface';

interface ProductListProps {
	beats: 	Beat[];
	imgs: 	BeatUrl[];
	audios: BeatUrl[];
}

export const ProductList = ({beats, imgs, audios}: ProductListProps)=> {
	return (
		<ul className={cn(
			"h-[68%] overflow-y-scroll overflow-x-hidden",
			"mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))]",
			"justify-center content-start gap-x-6 gap-y-6"
		)}>
			{beats.map((beat, idx)=> 
				<BeatBox 
					key={idx} 
					beat={beat} 
					beatImg={imgs.find( bimg => bimg.local_name.includes(beat.name) )!} 
					beatFile={audios.find( bfile => bfile.local_name.includes(beat.name) )!} 
					idx={idx}  
					mode='shop'
				/>
			)}
		</ul>
	)
}