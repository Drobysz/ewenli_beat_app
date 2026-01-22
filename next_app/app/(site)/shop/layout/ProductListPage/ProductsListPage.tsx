'use client'

import { Beat } from "@/interfaces/Products.interface";
import { useContext, useMemo } from "react";
import { ShopContext } from "../../context/shop.context";
import { GreyLine } from "@/components/index";
import { ProductList } from "./components/ProductList";
import { ProductsListPageProps } from "./ProductsListPage.props";
import cn from 'classnames';

export const ProductsListPage = ({ beats, beatImages, beatFiles, ...props }: ProductsListPageProps)=> {
    const { searchBarRequest, filteredCategoryList } = useContext(ShopContext);

    const filteredBeats: Beat[] = useMemo(()=>{
        const filteredByRequest = searchBarRequest !== '' 
            ? beats.filter(beat =>
                beat.name
                    .toLowerCase()
                    .includes(searchBarRequest.toLowerCase())) 
            : beats;

        const filteredByCategories = filteredCategoryList.length > 0
            ? filteredByRequest.filter( beat =>filteredCategoryList.includes(beat.categories) )
            : filteredByRequest;

        return filteredByCategories;
    }, [searchBarRequest, filteredCategoryList, beats]);

    return (
        <section
            {...props}
            className={cn(
                "border-t border-l border-dashed border-gray-700",
                "h-screen box-border px-5 py-6",
                "max-[510px]:py-3 max-[510px]:px-2 justify-center"
            )}
        >
            <GreyLine />
            <ProductList 
                beats={filteredBeats}
                imgs={beatImages}
                audios={beatFiles}
            />
            <GreyLine />
        </section>
    );
}