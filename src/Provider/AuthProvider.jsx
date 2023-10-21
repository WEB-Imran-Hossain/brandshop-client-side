import React, { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/FirebaseConfig";

export const AuthContext = createContext(null);

// using google signin
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    // signup
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observing current user inside useEffect of AuthProvider', currentUser);
            setUser(currentUser);
            setloading(false)
        });


        return () => {
            unSubscribe();
        }
    }, [])

    // create authentications
    const authentications = {
        googleLogin,
        createUser,
        user,
        loading,
        logOut,
        darkMode,
        setDarkMode
    }

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}