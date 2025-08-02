'use client';

// Props/Hooks
import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Categories } from "@/interfaces/Products.interface";
import { UserSession } from "@/interfaces/UserData.interface";

// Session
import { getSessionData } from "@/app/actions/sesssions";

// Auth
import { logoutServer } from "@/app/actions/auth";

// SWR

import useSWR, { mutate } from "swr";

interface CurrentBeat {
    name:      string;
    category:  Categories;
    imgUrl:    string;
    beatUrl:   string;
    isPlaying: boolean;
};

interface SiteContextInterface {
    isModalWindowOpen: boolean;
    isMenuWindowOpen:  boolean;
    sessionData?:      UserSession;

    setModalWindow:     Dispatch<SetStateAction<boolean>>;
    setMenuWindow:      Dispatch<SetStateAction<boolean>>;
    refreshSessionData: ()=> void;

    // Player and beats related states
    currentBeat:     CurrentBeat;
    isPlayerVisible: boolean;

    setCurrentBeat:      Dispatch<SetStateAction<CurrentBeat>>;
    setPlayerVisibility: Dispatch<SetStateAction<boolean>>;
}

export const SiteContext = createContext<SiteContextInterface>({
    isModalWindowOpen: false,
    isMenuWindowOpen:  false,
    
    setModalWindow:     () => {},
    setMenuWindow:      () => {},
    refreshSessionData: () => {},

    // Player and beats related states
    currentBeat:     { name: '', 
                       imgUrl: '', 
                       category: Categories.Digicore, 
                       beatUrl: '', 
                       isPlaying: false},
    isPlayerVisible: false,

    setCurrentBeat:      () => {},
    setPlayerVisibility: () => {},
});

export const SiteContextProvider = ({ 
    children
}: { 
    children:       ReactNode,
    initialSession: UserSession | undefined
 }) => {
    const [ isModalWindowOpen, setModalWindow ] = useState(false);
    const [ isMenuWindowOpen, setMenuWindow ] = useState(false);
    const {data: sessionData} = useSWR<UserSession | undefined>(
        'session',
        getSessionData,
        { refreshInterval: 60_000 }
    );
    const prevSessionData = useRef<UserSession | undefined>(undefined);

    const refreshSessionData = ()=> mutate('session');

    // Player and beats related states

    const [ currentBeat, setCurrentBeat ] = useState<CurrentBeat>({ 
        name:      '', 
        category:  Categories.Digicore, 
        imgUrl:    '', 
        beatUrl:   '', 
        isPlaying: false
    });
    const [ isPlayerVisible, setPlayerVisibility ] = useState(false);
    
    useEffect(()=> {
        if (sessionData === undefined && prevSessionData.current !== undefined) {
            logoutServer(prevSessionData.current.token!);
        } else {
            console.log('unsuccessful logout in context');
        }

        prevSessionData.current = sessionData
    }, [sessionData]);

    return (
        <SiteContext.Provider value={{
            isModalWindowOpen: isModalWindowOpen,
            isMenuWindowOpen:  isMenuWindowOpen,
            sessionData:       sessionData,
            currentBeat:       currentBeat,
            isPlayerVisible:   isPlayerVisible,

            setModalWindow,
            setMenuWindow,
            refreshSessionData,
            setCurrentBeat,
            setPlayerVisibility,
        }}>
            {children}
        </SiteContext.Provider>
    );
};