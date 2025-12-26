import { Categories } from "@/interfaces/Products.interface";
import { UserSession } from "@/interfaces/UserData.interface";
import { Dispatch, SetStateAction } from "react";

export interface SiteContextInterface {
    isMenuWindowOpen:    boolean;
	isClarifyWindowOpen: boolean;
    currentModalWindow:  windows;

    sessionData?:        UserSession;
    curentBeatInLicense: CurentBeatInLicenseProps;

    setMenuWindow:    Dispatch<SetStateAction<boolean>>;
	setClarifyWindow: Dispatch<SetStateAction<boolean>>;
    setModalWindow:   Dispatch<SetStateAction<windows>>;

    setCurentBeatInLicense: Dispatch<SetStateAction<CurentBeatInLicenseProps>>;
    refreshSessionData: ()=> void;

    // Player and beats related states
    currentBeat:     CurrentBeat;
    isPlayerVisible: boolean;

    setCurrentBeat:      Dispatch<SetStateAction<CurrentBeat>>;
    setPlayerVisibility: Dispatch<SetStateAction<boolean>>;
}

export interface CurrentBeat {
	name:      string;
	category:  Categories;
	imgUrl:    string;
	beatUrl:   string;
	isPlaying: boolean;
};

export interface CurentBeatInLicenseProps {
	name:     string, 
	category: string
};

export type windows = 'AccountSettings' | 'License' | 'Offers' | 'none';