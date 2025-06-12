'use client';

// Props/Hooks
import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Categories } from "@/interfaces/Products.interface";

// Helpers
import { getCategoryList } from "@/helpers/productsRequest";

interface ShopInterface {
    searchBarRequest : string;
    categoryList: Categories[];
    filteredCategoryList: Categories[];

    setSearchBarRequest: Dispatch<SetStateAction<string>>;
    setCategoryList: Dispatch<SetStateAction<Categories[]>>;
    setFilteredCategoryList: Dispatch<SetStateAction<Categories[]>>;
}

export const ShopContext = createContext<ShopInterface>({
    searchBarRequest: '',
    categoryList: [],
    filteredCategoryList: [],
    
    setSearchBarRequest: () => {},
    setCategoryList: () => {},
    setFilteredCategoryList: () => {}
});

export const ShopContextProvider = ({ children }: { children: ReactNode }) => {
    // SearchBar value
    const [ searchBarRequest, setSearchBarRequest ] = useState<string>('');
    // List of categories from API
    const [ categoryList, setCategoryList ] = useState<Categories[]>([]);
    // List of filtered categories
    const [ filteredCategoryList, setFilteredCategoryList ] = useState<Categories[]>([]);

    useEffect(()=>{
        async function fetchCategoryList() {
            const list = await getCategoryList();

            setCategoryList(list);
        }

        fetchCategoryList();
    }, []);

    return (
        <ShopContext.Provider value={{
            searchBarRequest: searchBarRequest,
            categoryList: categoryList,
            filteredCategoryList: filteredCategoryList,

            setCategoryList,
            setSearchBarRequest,
            setFilteredCategoryList
        }}>
            {children}
        </ShopContext.Provider>
    );
};