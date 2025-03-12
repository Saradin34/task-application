import { auth, firestore } from '../firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile,
    User,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const register = async (email: string, password: string, username: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    if (user) {
        await updateProfile(user, { displayName: username });
        await setDoc(doc(firestore, 'users', user.uid), {
            username,
            email,
        });
        console.log('Пользователь зарегистрирован:', user);
    }
    return userCredential;
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