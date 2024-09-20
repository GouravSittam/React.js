import React, { createContext, useState } from "react";

// Create a context with default values
const AuthContext = createContext({
    isAuthenticated: false,
    login: () => {},
    logout: () => {}
});

// Create a provider
const AuthProvider = ({ children }) => {
    // State to track whether user is authenticated or not
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        console.log("logging in ...");
        setIsAuthenticated(true);
        console.log('user is authenticated', true);
    };

    const logout = () => {
        console.log("logging out ...");
        setIsAuthenticated(false);
        console.log("user is authenticated", false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };