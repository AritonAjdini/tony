import { useState, createContext, Children } from "react";

export const AuthContext = createContext();


export const AuthProvider=({Children})=>{
    const [user, SetUser] = useState();
    return(
        <AuthContext.Provider value={{SetUser, user}}>
            {Children}
        </AuthContext.Provider>
    );
}