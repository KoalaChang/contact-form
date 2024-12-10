import { createContext, useState } from "react";

export const UserContext = createContext({
    user:{
        firstName:'',
        lastName:'',
        email:'',
        queryType:'',
        message:'',
        consent:''
    },
    error:{
        firstName:'',
        lastName:'',
        email:'',
        queryType:'',
        message:'',
        consent:''
    },
    updateUserData: (data) => {},
    updateUserError: (error) => {}
})

export function UserContextProvider({children, initialValue}) {
    const [userData, setUserData] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    function updateUserData(data) {
        setUserData(data);
    }

    function updateUserError(userError){
        setError(userError);
    }

    const userCtx = {
        user:userData,
        error: error,
        updateUserData,
        updateUserError
        }

    return <UserContext.Provider value={userCtx}>{children}</UserContext.Provider>
}