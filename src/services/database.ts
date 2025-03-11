import { firestore } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, arrayUnion } from 'firebase/firestore';

const tasksCollection = collection(firestore, 'tasks');

// Добавить задачу
export const addTask = async (task: { title: string; description: string; userId: string }) => {
    return addDoc(tasksCollection, { ...task, completed: false, comments: [] });
};

// Получить задачи пользователя
export const getTasks = async (userId: string) => {
    const snapshot = await getDocs(tasksCollection);
    return snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((task: any) => task.userId === userId);
};

// Обновить задачу
export const updateTask = async (id: string, updates: { title?: string; description?: string; completed?: boolean }) => {
    const taskDoc = doc(firestore, 'tasks', id);
    return updateDoc(taskDoc, updates);
};

// Удалить задачу
export const deleteTask = async (id: string) => {
    const taskDoc = doc(firestore, 'tasks', id);
    return deleteDoc(taskDoc);
};

// Добавить комментарий к задаче
export const addComment = async (taskId: string, comment: { text: string; user: string }) => {
    const taskDoc = doc(firestore, 'tasks', taskId);
    return updateDoc(taskDoc, {
        comments: arrayUnion({
            id: new Date().toISOString(), // Уникальный ID комментария
            text: comment.text,
            user: comment.user,
            timestamp: new Date().toISOString(),
        }),
    });
};