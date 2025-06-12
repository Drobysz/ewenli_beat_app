'use client';

// Props/Hooks
import { createContext, ReactNode, useState, useEffect, Dispatch, SetStateAction } from "react";

interface AppContextInterface {
    token: string | null;
    name: string | null;
    email: string | null;

    setToken: Dispatch<SetStateAction<string | null>>;
    setName: Dispatch<SetStateAction<string | null>>;
    setEmail: Dispatch<SetStateAction<string | null>>;

    isReady: boolean;           
}

export const AppContext = createContext<AppContextInterface>({
    token: '',
    name: null,
    email: null,
    
    setToken: () => {},
    setName: () => {},
    setEmail: () => {},

    isReady: false         
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
    const [ token, setToken ] = useState<string | null>(null);
    const [ name, setName ] = useState<string | null>(null);
    const [ email, setEmail ] = useState<string | null>(null);

    const [isReady, setIsReady] = useState(false);

    useEffect(()=>{
        const t = sessionStorage.getItem('token');
        const n = sessionStorage.getItem('name');
        const e = sessionStorage.getItem('email');


        setToken(t);
        setName(n);
        setEmail(e);

        setIsReady(true);
    }, []);

    return (
        <AppContext.Provider value={{
            token: token,
            name: name,
            email: email,
            isReady,
            
            setToken,
            setName,
            setEmail
        }}>
            {children}
        </AppContext.Provider>
    );
};