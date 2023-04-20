import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const userContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,CurrentUser=>{
            console.log("auth State Change",CurrentUser);
            setUser(CurrentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe();
        }
    },[])
    const value={
        user,
        createUser,
        singIn,
        logOut,
        loading,

    }
    return (
        <div>
            {/* context provider  */}
            <userContext.Provider value={value}>
                {children}
            </userContext.Provider>
            
        </div>
    );
};

export default AuthProvider;