import React, { createContext, useContext, useEffect, useState } from "react";
import { getToken, saveToken, removeToken } from "../../features/auth";

interface AuthContextType {
    isAuthenticated: boolean;
    loading: boolean;
    login: (token: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [ isAuthenticated, setIsAuthenticated ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const token = await getToken();
                setIsAuthenticated(!!token);
            } catch (error) {
                setLoading(false);
            } finally {
                setLoading(false);
            }
        };
    
        checkAuth();
    }, []);

    const login = async (token: string) => {
        await saveToken(token);
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await removeToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated,
            loading,
            login, 
            logout 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};
