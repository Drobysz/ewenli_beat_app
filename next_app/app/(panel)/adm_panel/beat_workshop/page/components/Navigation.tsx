'use client'

import { SearchBar, AdmPnlBtns } from "@/components/index";
import cn from 'classnames';
import { WorkshopContext } from "./../../context/workshop.context"
import { useContext } from "react";

export const WSNav = ()=> {
	const { setSearchValue } = useContext(WorkshopContext);
	return (
		<section className={cn(
			"flex gap-2 justify-center w-full items-center"
		)}>
			<SearchBar
				colorSet="light"
				setSearchBarRequest={setSearchValue}
			/>
			<AdmPnlBtns 
				func="create"
				size="large"
				// setClick={setClick}
			/>
		</section>
	)
}