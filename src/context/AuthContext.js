// AuthContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [open, setOpen] = useState(false);

    const handleOpenMenu = () => {
        setOpen(true);
    };
    
    const handleCloseMenu = () => {
        setOpen(false);
    };

    const [priceFuelActiveTab, setPriceFuelActiveTab] = useState('select-price');

    
    const [tcoCalculatorAffordabilityActiveTab, setTcoCalculatorAffordabilityActiveTab] = useState('emi-calculator');
    

    return (
        <AuthContext.Provider 
        value={{ 
            open, 
            setOpen,
            handleCloseMenu, 
            handleOpenMenu,
            priceFuelActiveTab,
            setPriceFuelActiveTab,
            tcoCalculatorAffordabilityActiveTab,
            setTcoCalculatorAffordabilityActiveTab,
            }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
