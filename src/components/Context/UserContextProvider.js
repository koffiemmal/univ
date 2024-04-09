import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });

  return (
    <UserContext.Provider value={{ auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};
