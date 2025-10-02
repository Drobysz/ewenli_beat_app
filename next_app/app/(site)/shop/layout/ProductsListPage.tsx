'use client'

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Beat } from "@/interfaces/Products.interface";
import { BeatUrl } from "@/interfaces/s3ElementData.interface";
import { useState, useContext, useEffect, useMemo } from "react";
import { ShopContext } from "../context/shop.context";
import { BeatBox, PriceTag } from "@/components/index";

interface ProductsListPageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    beats:      Beat[];
    beatImages: BeatUrl[];
    beatFiles:  BeatUrl[];
}

export const ProductsListPage = ({ beats, beatImages, beatFiles, ...props }: ProductsListPageProps)=> {
    // Searchbar and current category list values
    const { searchBarRequest, filteredCategoryList } = useContext(ShopContext);
    // Price Up/Down
    const [ priceState, setPriceState ] = useState(false);
    // Filtered Beats
    const [ filteredBeats, setFilteredBeats ] = useState<Beat[]>(beats);

    const filteredBeatsMemo = useMemo(()=>{
        const filteredByRequest = searchBarRequest !== '' 
            ? beats.filter( beat => beat.name.toLowerCase().includes(searchBarRequest.toLowerCase()) ) 
            : beats;

        const filteredByCategories = filteredCategoryList.length > 0
            ? filteredByRequest.filter( beat => filteredCategoryList.includes(beat.categories) )
            : filteredByRequest;

        const priceFilteredBeats = [...filteredByCategories].sort((a, b)=> 
            priceState
            ? (a.price > b.price ? -1 : 1)
            : (a.price < b.price ? -1 : 1)
        );

        return priceFilteredBeats;
    }, [searchBarRequest, filteredCategoryList, priceState, beats]);

    useEffect(() => setFilteredBeats(filteredBeatsMemo), [filteredBeatsMemo]);

    return (
        <div
            {...props}
            className="border-t-1 border-l-1 border-dashed border-gray-700 h-[100vh] box-border px-5 py-6 max-[510px]:py-3 max-[510px]:px-2 justify-center"
        >
            <PriceTag 
                setPriceState={setPriceState}
                priceState={priceState}
            />
            <div className="w-full border-2 border-gray-50/70 rounded-full mb-6 max-[580px]:border-1" />
            <ul 
                className="h-[68%] overflow-y-scroll overflow-x-hidden mb-6 grid grid-cols-[repeat(auto-fit,minmax(200px,400px))] justify-center content-start gap-x-6 gap-y-6"
            >
                {filteredBeats.map( (beat, idx)=> (
                    <BeatBox 
                        key={idx} 
                        beat={beat} 
                        beatImg={beatImages.find( bimg => bimg.local_name.includes(beat.name + '.png') )!} 
                        beatFile={beatFiles.find( bfile => bfile.local_name.includes(beat.name + '.mp3') )!} 
                        idx={idx}  
                        mode='shop'
                    />
                ))}
            </ul>
            <div className="w-full border-2 border-gray-50/70 rounded-full max-[580px]:border-1" />
        </div>
    );
}