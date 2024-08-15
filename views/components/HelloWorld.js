import React from "react";
import { useAuthentication } from "../AuthenticationContext";

function HelloWorld(){
    const client = useAuthentication();

    return client.isAuthenticated ? (<div>Hello World!!</div>) : "";
}

export default HelloWorld;