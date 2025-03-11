import { database } from '../firebase';
import { ref, push, onValue } from 'firebase/database';

const chatRef = ref(database, 'chat');

export const sendMessage = (message: string, user: string) => {
    return push(chatRef, { message, user, timestamp: Date.now() });
};

export const getMessages = (callback: (messages: any[]) => void) => {
    onValue(chatRef, (snapshot) => {
        const messages: any[] = [];
        snapshot.forEach((childSnapshot) => {
            messages.push({ id: childSnapshot.key, ...childSnapshot.val() });
        });
        callback(messages);
    });
};