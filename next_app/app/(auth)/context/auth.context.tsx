'use client';

// Props
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from "react";
import { AuthData } from "@/interfaces/AuthData.interface";

interface AuthContextInterface {
    authData: AuthData;

    setAuthData: Dispatch<SetStateAction<AuthData>>;
}

export const AuthContext = createContext<AuthContextInterface>({
    setAuthData: () => {},
    authData: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    }
});

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [authData, setAuthData] = useState<AuthData>({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    return (
        <AuthContext.Provider value={{
            authData: authData,
            setAuthData
        }}>
            {children}
        </AuthContext.Provider>
    );
};