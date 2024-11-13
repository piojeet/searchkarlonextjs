'use client'

const { createContext, useState, useContext } = require("react");

const MainContext = createContext();

export function MainProvider({children}) {
    const [state, setState] = useState('');

    return (
        <MainContext.Provider value={{state, setState}}>
            {children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext);