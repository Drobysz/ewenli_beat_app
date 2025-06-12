'use client'

// Props
import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

// Hooks
import { useContext, useState } from "react";

// Context
import { ShopContext } from "@/app/(site)/shop/context/shop.context";

export type SearchBarProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;


export const SearchBar: FC<SearchBarProps> = ()=> {
    // Search bar request value
    const { setSearchBarRequest } = useContext(ShopContext);
    // Search bar value
    const [ searchBarValue, setSearchBarValue ] = useState<string>('');

    return (
        <input 
            type="text"
            onChange={(e)=> setSearchBarValue(e.target.value)}
            onKeyDown={(e)=> e.key === 'Enter' && setSearchBarRequest(searchBarValue)}
            className="min-w-[280px] w-[70%] h-14 rounded-2xl bg-[#282727] bg-[url(/Search.svg)] bg-position-[center_left_0.25rem] bg-no-repeat text-white/80 text-center placeholder-[#6B6969]"
            placeholder="input the beat name"
        />
    )
};