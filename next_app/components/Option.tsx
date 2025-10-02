'use client'

// Props
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

// Hooks
import { useState, useContext } from "react";

// Context
import { ShopContext } from "@/app/(site)/shop/context/shop.context";

// Deps
import cn from 'classnames';
import { Categories } from "@/interfaces/Products.interface";

interface OptionProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement>{
    category: string;
};

export const Option: FC<OptionProps> = ({category, ...props})=> {
    // Option button state
    const [ isEnabled, setEnable ] = useState<boolean>(false);
    // Category List from the Shop Context 
    const { filteredCategoryList, setFilteredCategoryList } = useContext(ShopContext);

    // Modifying filtered category list
    const handleOption = ()=> {
        if (!isEnabled){
            setFilteredCategoryList([
                ...filteredCategoryList,
                category as Categories
            ])
        } else {
            setFilteredCategoryList(filteredCategoryList.filter(c=> c !== category))
        }
    };

    return (
        <li 
            {...props}
            className="flex justify-between items-center"
        >
            <div 
                className={cn("rounded-[0.125rem] max-[952px]:rounded-[0.065rem] w-3.5 h-3.5 max-[952px]:w-2 max-[952px]:h-2 max-[590px]:w-1.5 max-[590px]:h-1.5 ring-4 max-[952px]:ring-3 max-[590px]:ring-2 ring-blue ring-offset-4 max-[952px]:ring-offset-3 max-[590px]:ring-offset-2 ring-offset-zinc-950 cursor-pointer transition-all duration-200 active:scale-95", {
                    ['bg-gold']: isEnabled
                })}
                onClick={()=> {
                    setEnable(!isEnabled)
                    
                    handleOption()
                }}
            />

            <h3 
                className="text-2xl max-[952px]:text-base max-[590px]:text-sm max-[530px]:text-[0.7rem] text-transparent bg-gradient-to-br from-white to-gray-50 bg-clip-text"
            >
                {category}
            </h3>
        </li>
    )
};