"use client"

// Hooks
import { useContext, useState } from "react";

// Context
import { ShopContext } from "@/app/(site)/shop/context/shop.context";

export const SearchBar = ()=> {
    // Search bar request value
    const { setSearchBarRequest } = useContext(ShopContext);
    // Search bar value
    const [ searchBarValue, setSearchBarValue ] = useState('');

    return (
        <input 
            type="text"
            onChange={(e)=> setSearchBarValue(e.target.value)}
            onKeyDown={(e)=> e.key === 'Enter' && setSearchBarRequest(searchBarValue)}
            className="min-w-[180px] w-[70%] h-14 max-[610px]:h-10 rounded-2xl bg-[#282727] bg-[url(/Search.svg)] max-[682px]:bg-size-[40px] max-[610px]:bg-size-[30px] bg-position-[center_left_0.25rem] bg-no-repeat text-white/80 text-center max-[646px]:text-sm max-[610px]:text-xs max-[690px]:pl-10 max-[610px]:pl-5 placeholder-[#6B6969]"
            placeholder="input the beat name"
        />
    )
};