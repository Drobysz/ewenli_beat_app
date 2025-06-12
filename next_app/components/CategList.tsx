'use client'

// Context
import { ShopContext } from "@/app/(site)/shop/context/shop.context";

// Hooks
import { useContext } from "react";

// Fonts
import { handjet } from "@/fonts/fonts";

// Deps
import cn from 'classnames';

// Components
import { Option } from "./index";

export const CategList = ()=> {
    const { categoryList } = useContext(ShopContext);

    return (
        <ul
            className={cn("border-l-3 border-[#686868] flex flex-col gap-9 pl-4 w-[172px]", handjet.className)}
        >
            {
                categoryList.map( (category, idx)=> <Option 
                    key={idx} 
                    category={category}/> 
                )
            }
        </ul>
    )
};