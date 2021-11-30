import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../Pages/Database/Firebase';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unscubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });
        return unscubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, signup, login, logout }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, useAuth };