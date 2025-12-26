'use client';

import { createContext, ReactNode, useState, useEffect, useRef } from "react";

import { Categories } from "@/interfaces/Products.interface";
import { UserSession } from "@/interfaces/UserData.interface";
import { CurrentBeat, CurentBeatInLicenseProps, SiteContextInterface, windows } from "./site.interface";

import { getSessionData } from "@/app/actions/sesssions";
import { logoutServer } from "@/app/actions/auth";
import useSWR, { mutate } from "swr";

export const SiteContext = createContext<SiteContextInterface>({
    isMenuWindowOpen:    false,
    isClarifyWindowOpen: false,
    currentModalWindow:  'none',
    curentBeatInLicense: {name: "", category: ""},
    
    setMenuWindow:    () => {},
    setClarifyWindow: () => {},
    setModalWindow:   () => {},

    refreshSessionData:     () => {},
    setCurentBeatInLicense: () => {},

    // Player and beats related states
    currentBeat:    { 
                        name: '', 
                        imgUrl: '', 
                        category: Categories.Digicore, 
                        beatUrl: '', 
                        isPlaying: false
                    },
    isPlayerVisible: false,

    setCurrentBeat:      () => {},
    setPlayerVisibility: () => {},
});

export const SiteContextProvider = ({ 
    children
}: { 
    children: ReactNode,
 }) => {
    const [ currentModalWindow, setModalWindow ] = useState<windows>('none');
    const [ isMenuWindowOpen, setMenuWindow ] = useState(false);
    const [isClarifyWindowOpen, setClarifyWindow] = useState(false);
    const [ curentBeatInLicense, setCurentBeatInLicense ] = useState<CurentBeatInLicenseProps>({name: "", category: ""});
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
        }

        prevSessionData.current = sessionData
    }, [sessionData]);

    return (
        <SiteContext.Provider value={{
            isMenuWindowOpen:     isMenuWindowOpen,
            isClarifyWindowOpen:  isClarifyWindowOpen,
            currentModalWindow:   currentModalWindow,
            sessionData:          sessionData,
            currentBeat:          currentBeat,
            curentBeatInLicense:  curentBeatInLicense,
            isPlayerVisible:      isPlayerVisible,

            setModalWindow,
            setMenuWindow,
            setClarifyWindow,
            refreshSessionData,
            setCurrentBeat,
            setCurentBeatInLicense,
            setPlayerVisibility,
        }}>
            {children}
        </SiteContext.Provider>
    );
};