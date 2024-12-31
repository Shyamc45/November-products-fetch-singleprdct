import React, {createContext} from "react";
import MainComponent from "..ReactHooks/MainComponent";
import LoginContextProvider from "./context/LoginContextProvider";


export const LoginContext = createContext();

const context = () => {
  return (
    <LoginContextProvider>
    <div>
      <MainComponent/>
    </div>
    </LoginContextProvider>
  );
};

export default context;












// import { useState, createContext, useContext } from "react";

// const UserContext = createContext();

// function Component() {
//   const [user, setUser] = useState('shyam');

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hi ${user}!`}</h1>
//     </UserContext.Provider>
 

