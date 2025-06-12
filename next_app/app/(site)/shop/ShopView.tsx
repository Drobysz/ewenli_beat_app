'use client'

// Page
import { ProductsListPage } from "./layout/ProductsListPage";

// Props
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";

// Skeleton component/Hooks
import { FullScreenSpin } from "@/components/index";
import { Suspense, useEffect, useState } from "react";

// Helpers
import { getProducts } from "@/helpers/productsRequest";
import { getBeatImages, getBeatFiles } from "@/helpers/s3LibRequests";


export function ShopView () {
    const [beats, setBeats] = useState<Beat[]>();
    const [beatImages, setBeatImages] = useState<BeatUrl[]>();
    const [beatFiles, setBeatFiles] = useState<BeatUrl[]>();

    useEffect(()=>{
      async function fetchData() {
        const fetchedBeats = await getProducts();
        const fetchedBeatImages = await getBeatImages();
        const fetchedBeatFiles = await getBeatFiles();

        setBeats(fetchedBeats);
        setBeatImages(fetchedBeatImages);
        setBeatFiles(fetchedBeatFiles);
      }

      fetchData();
    }, []);

    if (!beats || !beatImages || !beatFiles) {
        return <FullScreenSpin />;
    }

    return (
        <Suspense fallback={<FullScreenSpin />}>
            <ProductsListPage beats={beats} beatImages={beatImages} beatFiles={beatFiles}/>
        </Suspense>
    );
};
