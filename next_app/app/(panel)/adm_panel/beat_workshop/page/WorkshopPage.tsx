import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { WSTitle, WSNav, WSBeatList } from "./components/index";
import { WorkshopContextProvider } from "../context/workshop.context";
import cn from 'classnames';

interface ProductsListPageProps{
    beats:      Beat[];
    beatImages: BeatUrl[];
    beatFiles:  BeatUrl[];
}

export const WSPage = ({
	beats,
	beatImages,
	beatFiles
}: ProductsListPageProps)=> {
	return (
		<div className={cn(
			"flex flex-col items-center",
			"h-full py-3",
		)}>
			<WorkshopContextProvider>
				<WSTitle />
				<WSNav />
				<WSBeatList 
					beats={beats}
					beatImages={beatImages}
					beatFiles={beatFiles}
				/>
			</WorkshopContextProvider>
		</div>
	)
}