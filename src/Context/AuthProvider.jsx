import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Utilities/Firebase/firebase.config";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(true);

    const provider = new GoogleAuthProvider();

    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (userCredentials) => {
            setUser(userCredentials);
            setLoading(false);
        })

        return () => unsubscribe;
    }, [])

    const logOut = () => {
        return signOut(auth);
    }

    const modifiedProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        .then(() =>{
            setUser({ ...auth.currentUser });
        })
    }

    const userInfo = {
        googleSign,
        registerUser,
        signIn,
        success,
        setSuccess,
        err,
        setErr,
        user,
        setUser,
        logOut,
        modifiedProfile,
        loading
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;