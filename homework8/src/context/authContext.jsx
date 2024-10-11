import { createContext, useState } from "react";

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuthData = localStorage.getItem("isAuthenticated");
    return savedAuthData ? JSON.parse(savedAuthData) : false;
  });

  const login = (rememberMe) => {
    setIsAuthenticated(true);
    if (rememberMe) {
      localStorage.setItem("isAuthenticated", JSON.stringify(true));
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// import { createContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check localStorage to maintain login if "Remember Me" was checked
//   useEffect(() => {
//     const storedAuth = localStorage.getItem('isAuthenticated');
//     if (storedAuth === 'true') {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const login = (remember) => {
//     setIsAuthenticated(true);
//     if (remember) {
//       localStorage.setItem('isAuthenticated', 'true');
//     }
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem('isAuthenticated');
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

export { AuthContext, AuthProvider };