'use server'

import { getProducts } from "@/helpers/productsRequest";
import { getBeatFiles, getBeatImages } from "@/helpers/s3LibRequests";
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { Suspense } from "react";
import { FullScreenSpin } from "@/components/index";
import { WSPage } from "./page/WorkshopPage";

export async function generateMetadata(){
  return {
    title: "Beat Workshop",
  };
};

export default async function WorkshopView() {
	const beats:      Beat[]    = await getProducts();
	const beatImages: BeatUrl[] = await getBeatImages();
	const beatFiles:  BeatUrl[] = await getBeatFiles();

	if (beats === undefined || beatImages === undefined || beatFiles === undefined) {
		return <FullScreenSpin />
	}

	return (
		<Suspense fallback={<FullScreenSpin />}>
			<WSPage 
				beats={beats} 
				beatImages={beatImages} 
				beatFiles={beatFiles}
			/>
		</Suspense>
	)
}