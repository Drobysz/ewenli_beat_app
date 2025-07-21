// Fetch function
import { getPurchasedProducts } from "@/helpers/productsRequest";

// Components
import { BeatBox, FullScreenSpin, GrayFeed } from "@/components/index";

// Props
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { UserSession } from "@/interfaces/UserData.interface";

// Hooks
import { getBeatImages } from "@/helpers/s3LibRequests";

// Deps
import cn from 'classnames';

// Fonts
import { climate_crisis } from "@/fonts/fonts";

// Meta data
import metaData from '@/metadata/metadata.json';

// Session
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
            <GrayFeed>
                <h1 className={cn('flex justify-center items-center text-white text-5xl h-[104px]', climate_crisis.className)}>
                    Inventory
                </h1>
            </GrayFeed>

            <ul 
                className="overflow-x-hidden mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))] justify-center content-start gap-x-6 gap-y-6 pt-10"
            >
                {
                    purchasedBeats!.length > 0 
                    ?
                        purchasedBeats!.map( (beat, idx)=> (
                            <BeatBox 
                                key={idx} 
                                beat={beat} 
                                beatImg={purchasedBeatsImgs!.find( bimg => bimg.local_name.includes(beat.name + '.png') )!}  
                                idx={idx} 
                                mode="inventory" 
                            />
                        ))
                    :
                        <h2 className="text-white/30 text-5xl">
                            Your Inventory is empty
                        </h2>
                }
            </ul>
        </div>
    );
};