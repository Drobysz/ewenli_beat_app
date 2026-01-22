'use client'

import { BeatToModify, sample } from "./workshop.interface";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";


interface WorkshopContextInterface {
	searchValue:  		 string;
	beatToModify: 		 BeatToModify;
	isBeatWindowVisible: boolean;

	setSearchValue:  		 Dispatch<SetStateAction<string>>;
	setBeatToModify: 		 Dispatch<SetStateAction<BeatToModify>>;
	setBeatWindowVisibility: Dispatch<SetStateAction<boolean>>;
}

export const WorkshopContext = createContext<WorkshopContextInterface>({
	searchValue: 		 '',
	beatToModify: 		 sample,
	isBeatWindowVisible: false,

	setSearchValue:  		 ()=> {},
	setBeatToModify: 		 ()=> {},
	setBeatWindowVisibility: ()=> {}

});

export const WorkshopContextProvider = ({children}: {children: ReactNode})=> {
	const [searchValue, setSearchValue] = useState('');
	const [beatToModify, setBeatToModify] = useState<BeatToModify>(sample);
	const [isBeatWindowVisible, setBeatWindowVisibility] = useState(false);

	return (
		<WorkshopContext.Provider
			value={{
				searchValue:  		 searchValue,
				beatToModify: 		 beatToModify,
				isBeatWindowVisible: isBeatWindowVisible,

				setSearchValue,
				setBeatToModify,
				setBeatWindowVisibility
			}}
		>
			{children}
		</WorkshopContext.Provider>
	)
}