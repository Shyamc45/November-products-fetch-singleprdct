import React, {createContext, useState} from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [UserData, setUserData] = useState(true);
  return (
    <LoginContext.Provider value={UserData} >
        { children }

    </LoginContext.Provider>

  );
};

export default LoginContextProvider;
