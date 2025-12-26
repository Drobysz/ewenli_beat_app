import { getPurchasedProducts } from "@/helpers/productsRequest";
import { FullScreenSpin } from "@/components/index";
import { LicenseWindow, Title, InventoryList, Items } from "./page/index";
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { UserSession } from "@/interfaces/UserData.interface";
import { getBeatImages } from "@/helpers/s3LibRequests";
import metaData from '@/metadata/metadata.json';
import { getSessionData } from "@/app/actions/sesssions";

export async function generateMetadata(){
  return {
    title: metaData.inventory.title,
    description: metaData.inventory.description,
  };
};

export default async function InventoryPage () {
    const sessionData: UserSession | undefined = await getSessionData();
    
    if (sessionData === undefined) {
        return <FullScreenSpin />
    }

    const purchasedBeats:     Beat[]    = await getPurchasedProducts(sessionData.token!);
    const purchasedBeatsImgs: BeatUrl[] = await getBeatImages();

    if (!purchasedBeats || !purchasedBeatsImgs) {
        return <FullScreenSpin />;
    }

    return (
        <div className="h-[100vh] overflow-y-scroll">
            <Title />
            <InventoryList>
                <Items 
                    purchasedBeats={purchasedBeats}
                    imgs={purchasedBeatsImgs}
                />
            </InventoryList>
            <LicenseWindow />
        </div>
    );
};