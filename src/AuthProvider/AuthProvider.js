import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.init'
export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    
    const googleProvider=new GoogleAuthProvider()
    const[user,setUser]=useState({})
    const [loader,setLoader]=useState(true)
    const googleLogin=()=>{
       return signInWithPopup(auth,googleProvider)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log('on auth changed')
            setLoader(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const logOut=()=>{
        return signOut(auth)
    }
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const authInfo={user,googleLogin,logOut,createUser,signIn}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;