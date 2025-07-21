'use client';

// Props/Hooks
import { createContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from "react";
import { Categories } from "@/interfaces/Products.interface";
import { UserSession } from "@/interfaces/UserData.interface";

// Session
import { getSessionData } from "@/app/actions/sesssions";

// Auth
import { logoutServer } from "@/app/actions/auth";

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

    setModalWindow: Dispatch<SetStateAction<boolean>>;
    setMenuWindow:  Dispatch<SetStateAction<boolean>>;
    setSessionData: Dispatch<SetStateAction<UserSession | undefined>>;

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
    
    setModalWindow: () => {},
    setMenuWindow:  () => {},
    setSessionData: () => {},

    // Player and beats related states
    currentBeat:     { name: '', imgUrl: '', category: Categories.Digicore, beatUrl: '', isPlaying: false},
    isPlayerVisible: false,
    beatId:          { id: -1, qntty: 0 },

    setCurrentBeat:      () => {},
    setPlayerVisibility: () => {},
    setBeatId:           () => {},
});

export const SiteContextProvider = ({ 
    children,
    initialSession 
}: { 
    children:       ReactNode,
    initialSession: UserSession | undefined
 }) => {
    // State of modal window with user settings
    const [ isModalWindowOpen, setModalWindow ] = useState(false);
    // Menu window state
    const [ isMenuWindowOpen, setMenuWindow ] = useState(false);
    // User Session Data
    const [ sessionData, setSessionData ] = useState<UserSession | undefined>(initialSession);

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
    
    useEffect(()=>{
        const id = setInterval(()=>{
            async function fetchSessionData () {
                const fetchedSessionData = await getSessionData();

                if (fetchedSessionData === undefined && sessionData !== undefined){
                    logoutServer(sessionData.token!)
                }

                setSessionData(fetchedSessionData);
            }

            fetchSessionData();
        }, 1000 * 60);

        return ()=> clearInterval(id);
    }, []);

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
            setSessionData,
            setCurrentBeat,
            setPlayerVisibility,
            setBeatId
        }}>
            {children}
        </SiteContext.Provider>
    );
};