import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";

export interface ProductsListPageProps {
	beats:      Beat[];
	beatImages: BeatUrl[];
	beatFiles:  BeatUrl[];
}