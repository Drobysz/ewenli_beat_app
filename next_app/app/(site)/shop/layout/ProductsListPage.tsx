'use client'

// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";

// Hooks
import { useState, useContext, useEffect, useMemo } from "react";

// Context
import { ShopContext } from "../context/shop.context";
import { SiteContext } from "../../context/site.context";

// Component
import { BeatBox } from "@/components/index";
import { PriceTag } from "@/components/index";

interface ProductsListPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    beats:      Beat[];
    beatImages: BeatUrl[];
    beatFiles:  BeatUrl[];
}

export const ProductsListPage: FC<ProductsListPageProps> = ({ beats, beatImages, beatFiles, ...props })=> {
    // Searchbar and current category list values
    const { searchBarRequest, filteredCategoryList } = useContext(ShopContext);
    const { beatId, setBeatId } = useContext(SiteContext);
    // Price Up/Down
    const [ priceState, setPriceState ] = useState(false);
    // Filtered Beats
    const [ filteredBeats, setFilteredBeats ] = useState<Beat[]>(beats);

    const filteredBeatsMemo = useMemo(()=>{
        const searchFilteredBeats = searchBarRequest !== '' 
            ? beats.filter( beat => beat.name.toLowerCase().includes(searchBarRequest.toLowerCase()) ) 
            : beats;

        const categoriesFilteredBeats = filteredCategoryList.length > 0
            ? searchFilteredBeats.filter( beat => filteredCategoryList.includes(beat.categories) )
            : searchFilteredBeats;

        const priceFilteredBeats = [...categoriesFilteredBeats].sort((a, b)=> 
            priceState
            ? (a.price > b.price ? -1 : 1)
            : (a.price < b.price ? -1 : 1)
        );

        return priceFilteredBeats;
    }, [searchBarRequest, filteredCategoryList, priceState, beats]);

    useEffect(() => setFilteredBeats(filteredBeatsMemo), [filteredBeatsMemo]);

    useEffect(()=> {
        setBeatId({
            ...beatId,
            qntty: beats.length
        })
    }, []);

    return (
        <div
            {...props}
            className="border-t-1 border-l-1 border-dashed border-gray-700 h-[100vh] box-border px-5 py-6 justify-center"
        >
            <PriceTag 
                setPriceState={setPriceState}
                priceState={priceState}
            />
            
            <div 
                className="w-full border-2 border-gray-50/70 rounded-full mb-6"
            />

            <ul 
                className="h-[68%] overflow-y-scroll overflow-x-hidden mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))] justify-center content-start gap-x-6 gap-y-6"
            >
                {
                    filteredBeats.map( (beat, idx)=> (
                        <BeatBox 
                            key={idx} 
                            beat={beat} 
                            beatImg={beatImages.find( bimg => bimg.local_name.includes(beat.name + '.png') )!} 
                            beatFile={beatFiles.find( bfile => bfile.local_name.includes(beat.name + '.mp3') )!} 
                            idx={idx}  
                            mode='shop'
                        />
                    ) 
                    )
                }
            </ul>

            <div 
                className="w-full border-2 border-gray-50/70 rounded-full"
            />
        </div>
    );
}