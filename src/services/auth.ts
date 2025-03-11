import { auth } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
} from 'firebase/auth';


export const register = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
};


export const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
};


export const logout = () => {
    return signOut(auth);
};


export const onAuthChange = (callback: (user: User | null) => void) => {
    return onAuthStateChanged(auth, callback);
};