'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";

interface PanelContextInterface {
	isMenuOpened: boolean;
	showTitle:    boolean;

	setMenuOpen:  Dispatch<SetStateAction<boolean>>;
	setShowTitle: Dispatch<SetStateAction<boolean>>;
}

export const PanelContext = createContext<PanelContextInterface>({
	isMenuOpened: false,
	showTitle: 	  true,

	setMenuOpen:  ()=> {},
	setShowTitle: ()=> {},
});

export const PanelContextProvider = ({children}: {children: ReactNode})=> {
	const [isMenuOpened, setMenuOpen] = useState(false);
	const [showTitle, setShowTitle] = useState(false);
	
	useEffect(()=> {
		const timer = setTimeout(()=> setShowTitle(isMenuOpened), 180);
		return ()=> clearTimeout(timer);
	}, [isMenuOpened]);

	return (
		<PanelContext.Provider
			value={{
				isMenuOpened: isMenuOpened,
				showTitle:	  showTitle,

				setMenuOpen,
				setShowTitle
			}}
		>
			{children}
		</PanelContext.Provider>
	)
}