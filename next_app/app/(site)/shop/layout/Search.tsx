'use client'

import { SearchBar } from "@/components/index";
import cn from 'classnames';
import { useContext } from "react";
import { ShopContext } from "../context/shop.context";

export const Search = ({className}: {className: string})=> {
    const { setSearchBarRequest } = useContext(ShopContext);

    return (
        <div className={cn(
            "flex justify-center",
            "items-center px-5",
            className
        )}>
            <SearchBar setSearchBarRequest={setSearchBarRequest} />
        </div>
    );
}