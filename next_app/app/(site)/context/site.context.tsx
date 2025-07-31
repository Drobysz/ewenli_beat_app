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

interface BeatIdController {
    id:    number;
    qntty: number;
}

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
    beatId:          BeatIdController;

    setCurrentBeat:      Dispatch<SetStateAction<CurrentBeat>>;
    setPlayerVisibility: Dispatch<SetStateAction<boolean>>;
    setBeatId:           Dispatch<SetStateAction<BeatIdController>>;
}

export const SiteContext = createContext<SiteContextInterface>({
    isModalWindowOpen: false,
    isMenuWindowOpen:  false,
    
    setModalWindow:     () => {},
    setMenuWindow:      () => {},
    refreshSessionData: () => {},

    // Player and beats related states
    currentBeat:     { name: '', imgUrl: '', category: Categories.Digicore, beatUrl: '', isPlaying: false},
    isPlayerVisible: false,
    beatId:          { id: -1, qntty: 0 },

    setCurrentBeat:      () => {},
    setPlayerVisibility: () => {},
    setBeatId:           () => {},
});

export const SiteContextProvider = ({ 
    children
}: { 
    children:       ReactNode,
    initialSession: UserSession | undefined
 }) => {
    // State of modal window with user settings
    const [ isModalWindowOpen, setModalWindow ] = useState(false);
    // Menu window state
    const [ isMenuWindowOpen, setMenuWindow ] = useState(false);
    // User Session Data
    const {data: sessionData} = useSWR<UserSession | undefined>(
        'session',
        getSessionData,
        { refreshInterval: 60_000 }
    );
    const prevSessionData = useRef<UserSession | undefined>(undefined);

    // Player and beats related states

    // Beat chose at the current moment
    const [ currentBeat, setCurrentBeat ] = useState<CurrentBeat>({ 
        name:      '', 
        category:  Categories.Digicore, 
        imgUrl:    '', 
        beatUrl:   '', 
        isPlaying: false
    });
    // Player visibility state
    const [ isPlayerVisible, setPlayerVisibility ] = useState(false);
    // Beat ID state
    const [ beatId, setBeatId ] = useState<BeatIdController>({ id: -1, qntty: 0 });

    const refreshSessionData = ()=> mutate('session');
    
    useEffect(()=> {
        if (sessionData === undefined && prevSessionData.current !== undefined) {
            logoutServer(prevSessionData.current.token!);
        }
    }, [sessionData]);

    return (
        <SiteContext.Provider value={{
            isModalWindowOpen: isModalWindowOpen,
            isMenuWindowOpen:  isMenuWindowOpen,
            sessionData:       sessionData,
            currentBeat:       currentBeat,
            isPlayerVisible:   isPlayerVisible,
            beatId:            beatId,

            setModalWindow,
            setMenuWindow,
            refreshSessionData,
            setCurrentBeat,
            setPlayerVisibility,
            setBeatId
        }}>
            {children}
        </SiteContext.Provider>
    );
};