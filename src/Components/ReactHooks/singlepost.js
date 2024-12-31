import React, { useContext } from "react";  
import { LoginContext } from "./UseContext";

const singlePost = () => {
    const login = useContext(LoginContext);
    console.log(login);
    return <h3>singlePost</h3>;
    };

    export default singlePost;