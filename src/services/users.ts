import { database } from '../firebase';
import { ref, onDisconnect, onValue, set, remove } from 'firebase/database';

// Добавить пользователя в список онлайн
export const setUserOnline = (userId: string, username: string) => {
    const userRef = ref(database, `onlineUsers/${userId}`);
    set(userRef, { username });

    // Удалить пользователя при отключении
    onDisconnect(userRef).remove();
};

// Получить список онлайн-пользователей
export const getOnlineUsers = (callback: (users: { id: string; username: string }[]) => void) => {
    const usersRef = ref(database, 'onlineUsers');
    onValue(usersRef, (snapshot) => {
        const users: { id: string; username: string }[] = [];
        snapshot.forEach((childSnapshot) => {
            users.push({ id: childSnapshot.key!, username: childSnapshot.val().username });
        });
        callback(users);
    });
};

// Удалить пользователя из списка онлайн
export const setUserOffline = (userId: string) => {
    const userRef = ref(database, `onlineUsers/${userId}`);
    remove(userRef);
};