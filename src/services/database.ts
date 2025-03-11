import { firestore } from '../firebase';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const tasksCollection = collection(firestore, 'tasks');

export const addTask = async (task: { title: string; description: string; userId: string }) => {
    return addDoc(tasksCollection, task);
};

export const getTasks = async (userId: string) => {
    const snapshot = await getDocs(tasksCollection);
    return snapshot.docs
        .map((doc) => ({ id: doc.id, ...doc.data() }))
        .filter((task: any) => task.userId === userId);
};

export const updateTask = async (id: string, updates: { title?: string; description?: string; completed?: boolean }) => {
    const taskDoc = doc(firestore, 'tasks', id);
    return updateDoc(taskDoc, updates);
};

export const deleteTask = async (id: string) => {
    const taskDoc = doc(firestore, 'tasks', id);
    return deleteDoc(taskDoc);
};