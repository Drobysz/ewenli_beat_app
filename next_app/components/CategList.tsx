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
            className={cn("border-l-3 border-[#686868] flex flex-col gap-9 max-[375px]:gap-4 pl-4 max-[335px]:pl-2 w-full max-w-[172px] max-[435px]:w-[123px] max-[375px]:w-[106px] max-[335px]:w-[86px]", handjet.className)}
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