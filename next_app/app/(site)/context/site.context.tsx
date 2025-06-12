'use client';

// Props/Hooks
import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";
import { Categories } from "@/interfaces/Products.interface";

interface CurrentBeat {
    name: string;
    category: Categories;
    imgUrl: string;
    beatUrl: string;
    isPlaying: boolean;
};

interface BeatIdController {
    id: number;
    qntty: number;
}

interface SiteContextInterface {
    isModalWindowOpen: boolean;
    isMenuWindowOpen: boolean;

    setModalWindow: Dispatch<SetStateAction<boolean>>;
    setMenuWindow: Dispatch<SetStateAction<boolean>>;

    // Player and beats related states
    currentBeat: CurrentBeat;
    isPlayerVisible: boolean;
    beatId: BeatIdController;

    setCurrentBeat: Dispatch<SetStateAction<CurrentBeat>>;
    setPlayerVisibility: Dispatch<SetStateAction<boolean>>;
    setBeatId: Dispatch<SetStateAction<BeatIdController>>;
}

export const SiteContext = createContext<SiteContextInterface>({
    isModalWindowOpen: false,
    isMenuWindowOpen: false,
    
    setModalWindow: () => {},
    setMenuWindow: () => {},

    // Player and beats related states
    currentBeat: { name: '', imgUrl: '', category: Categories.Digicore, beatUrl: '', isPlaying: false},
    isPlayerVisible: false,
    beatId: { id: -1, qntty: 0 },

    setCurrentBeat: () => {},
    setPlayerVisibility: () => {},
    setBeatId: () => {},
});

export const SiteContextProvider = ({ children }: { children: ReactNode }) => {
    // State of modal window with user settings
    const [ isModalWindowOpen, setModalWindow ] = useState<boolean>(false);
    // Menu window state
    const [ isMenuWindowOpen, setMenuWindow ] = useState<boolean>(false);

    // Player and beats related states

    // Beat chose at the current moment
    const [ currentBeat, setCurrentBeat ] = useState<CurrentBeat>({ name: '', category: Categories.Digicore, imgUrl: '', beatUrl: '', isPlaying: false});
    // Player visibility state
    const [ isPlayerVisible, setPlayerVisibility ] = useState<boolean>(false);
    // Beat ID state
    const [ beatId, setBeatId ] = useState<BeatIdController>({ id: -1, qntty: 0 });

    useEffect(()=>{
        setModalWindow(false);
    }, []);

    return (
        <SiteContext.Provider value={{
            isModalWindowOpen: isModalWindowOpen,
            isMenuWindowOpen: isMenuWindowOpen,
            currentBeat: currentBeat,
            isPlayerVisible: isPlayerVisible,
            beatId: beatId,

            setModalWindow,
            setMenuWindow,
            setCurrentBeat,
            setPlayerVisibility,
            setBeatId
        }}>
            {children}
        </SiteContext.Provider>
    );
};