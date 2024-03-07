// authContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for authentication context
type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
};

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the authentication provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Define the state for isAuthenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Define the login function
  const login = () => {
    setIsAuthenticated(true);
  };

  // Define the logout function
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Return the authentication context provider with the value containing isAuthenticated, login, and logout
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access the authentication context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
