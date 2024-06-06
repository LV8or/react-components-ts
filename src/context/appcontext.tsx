import React, { createContext, useState, ReactNode, FC } from 'react';
import useStorage from '../hooks/useStorage.ts';

interface AppContextProps {
    darkTheme: boolean;
    scrollPerc: number;
    handleDarkTheme: () => void;
    handleScrollPerc: (p: number) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider: FC<AppProviderProps> = ({ children }) => {
    const [token, setTheme] = useStorage('darkMode', 'local');
    const dk = (token === null) ? true : Boolean(token);

    const [darkTheme, setDarkTheme] = useState<boolean>(dk);
    const [scrollPerc, setScrollPerc] = useState<number>(0);

    const handleDarkTheme = () => {
        const thisTheme = !darkTheme;

        setTheme(thisTheme);
        setDarkTheme(thisTheme);
    };

    const handleScrollPerc = (p: number) => {
        setScrollPerc(p);
    };

    const valueToShare: AppContextProps = {
        darkTheme,
        scrollPerc,
        handleDarkTheme,
        handleScrollPerc
    };

    return (
        <AppContext.Provider value={valueToShare}>
            {children}
        </AppContext.Provider>
    );
};
