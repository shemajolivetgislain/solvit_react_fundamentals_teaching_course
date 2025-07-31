/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Simulate user login info
  const [user, setUser] = useState({
    name: "Jolivet",
    email: "jolivet@example.com",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
