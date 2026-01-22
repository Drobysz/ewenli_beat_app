'use client'

import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useContext } from "react";
import { ShopContext } from "@/app/(site)/shop/context/shop.context";
import { Categories } from "@/interfaces/Products.interface";
import cn from 'classnames';

interface OptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    category: Categories;
};

export const Option = ({category, ...props}: OptionProps)=> {
    // Category List from the Shop Context 
    const { filteredCategoryList, setFilteredCategoryList } = useContext(ShopContext);
    const isEnabled = filteredCategoryList.includes(category);

    const handleOption = ()=> {
        setFilteredCategoryList(prev=> 
            prev.includes(category)
                ? filteredCategoryList.filter(c=> c !== category)
                : [...filteredCategoryList, category]
        )
    };

    return (
        <li 
            {...props}
            className="flex justify-between items-center"
        >
            <div
                onClick={()=> handleOption()}
                className={cn(
                    "rounded-xs max-[952px]:rounded-[0.065rem] w-3.5 h-3.5",
                    "max-[952px]:w-2 max-[952px]:h-2 max-[590px]:w-1.5 max-[590px]:h-1.5",
                    "ring-4 max-[952px]:ring-3 max-[590px]:ring-2 ring-blue ring-offset-4",
                    "max-[952px]:ring-offset-3 max-[590px]:ring-offset-2 ring-offset-zinc-950",
                    "cursor-pointer transition-all duration-200 active:scale-95",
                    {['bg-gold']: isEnabled}
                )}
            />

            <h3 
                className={cn(
                    "text-2xl max-[952px]:text-base max-[590px]:text-sm",
                    "max-[530px]:text-[0.7rem] text-transparent",
                    "bg-linear-to-br from-white to-gray-50 bg-clip-text"
            )}>
                {category}
            </h3>
        </li>
    )
};