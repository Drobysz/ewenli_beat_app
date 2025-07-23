// Page
import { ProductsListPage } from "./layout/ProductsListPage";

// Props
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";

// Skeleton component
import { FullScreenSpin } from "@/components/index";
import { Suspense } from "react";

// Helpers
import { getProducts } from "@/helpers/productsRequest";
import { getBeatImages, getBeatFiles } from "@/helpers/s3LibRequests";

// Meta data
import metaData from '@/metadata/metadata.json';

export async function generateMetadata(){
  return {
    title: metaData.shop.title,
    description: metaData.shop.description,
  };
};

export async function ShopView () {
    const beats:      Beat[]    = await getProducts();
    const beatImages: BeatUrl[] = await getBeatImages();
    const beatFiles:  BeatUrl[] = await getBeatFiles();

    return (
        <Suspense fallback={<FullScreenSpin />}>
            <ProductsListPage beats={beats} beatImages={beatImages} beatFiles={beatFiles}/>
        </Suspense>
    );
};
