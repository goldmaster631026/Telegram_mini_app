// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a Context for the authentication state
const NavarContext = createContext();

// Create a Provider Component
export const NavbarProvider = ({ children }) => {
    const [isNavar, setIsNavar] = useState(false);
    const top = () => {
        setIsNavar(true);
    };

    const normal = () => {
        setIsNavar(false);
    };
    return (
        <NavarContext.Provider value={{ isNavar, top, normal }}>
            {children}
        </NavarContext.Provider>
    );
};

// Custom hook to use the Auth context
export const useNavar = () => {
    return useContext(NavarContext);
};