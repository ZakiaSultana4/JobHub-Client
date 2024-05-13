import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const defaultImage = "https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg";
    const auth = getAuth(app);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if(currentUser) {
                setUser(currentUser);
                
                axios.post(`https://jobhub-a11.vercel.app/jwt`, {user: currentUser?.email}, 
                {withCredentials: true}
                ).then(res => console.log(res.data))
                .catch(err => console.log(err))
            }
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [auth])

    const contextData = {
        setUser,
        createUser,
        loading,
        user,
        loginWithEmailAndPassword,
        logOut,

        defaultImage,
        setLoading,
        googleLogin
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}