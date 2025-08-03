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

interface CurentBeatInLicenseProps {
    name:     string, 
    category: string
};

// initialSession
interface SiteContextInterface {
    isModalWindowOpen:   boolean;
    isMenuWindowOpen:    boolean;
    sessionData?:        UserSession;
    isLicenseWindowOpen: boolean;
    curentBeatInLicense: CurentBeatInLicenseProps;

    setModalWindow:           Dispatch<SetStateAction<boolean>>;
    setMenuWindow:            Dispatch<SetStateAction<boolean>>;
    setLicenseWindow:         Dispatch<SetStateAction<boolean>>;
    setCurentBeatInLicense:   Dispatch<SetStateAction<CurentBeatInLicenseProps>>;
    refreshSessionData:       ()=> void;

    // Player and beats related states
    currentBeat:     CurrentBeat;
    isPlayerVisible: boolean;

    setCurrentBeat:      Dispatch<SetStateAction<CurrentBeat>>;
    setPlayerVisibility: Dispatch<SetStateAction<boolean>>;
}

export const SiteContext = createContext<SiteContextInterface>({
    isModalWindowOpen:   false,
    isMenuWindowOpen:    false,
    isLicenseWindowOpen: false,
    curentBeatInLicense: {name: "", category: ""},
    
    setModalWindow:         () => {},
    setMenuWindow:          () => {},
    setLicenseWindow:       () => {},
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
    children:       ReactNode,
 }) => {
    const [ isModalWindowOpen, setModalWindow ] = useState(false);
    const [ isMenuWindowOpen, setMenuWindow ] = useState(false);
    const [ isLicenseWindowOpen, setLicenseWindow ] = useState(false);
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
        } else {
            console.log('unsuccessful logout in context');
        }

        prevSessionData.current = sessionData
    }, [sessionData]);

    return (
        <SiteContext.Provider value={{
            isModalWindowOpen:    isModalWindowOpen,
            isMenuWindowOpen:     isMenuWindowOpen,
            isLicenseWindowOpen:  isLicenseWindowOpen,
            sessionData:          sessionData,
            currentBeat:          currentBeat,
            curentBeatInLicense:  curentBeatInLicense,
            isPlayerVisible:      isPlayerVisible,

            setModalWindow,
            setMenuWindow,
            setLicenseWindow,
            refreshSessionData,
            setCurrentBeat,
            setCurentBeatInLicense,
            setPlayerVisibility,
        }}>
            {children}
        </SiteContext.Provider>
    );
};