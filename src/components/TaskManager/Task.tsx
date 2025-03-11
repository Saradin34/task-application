import React from 'react';
import styles from './TaskManager.module.scss';

interface TaskProps {
    task: { id: string; title: string; description: string; completed: boolean };
    onToggleComplete: () => void;
    onDelete: () => void;
}

const Task: React.FC<TaskProps> = ({ task, onToggleComplete, onDelete }) => {
    return (
        <div className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={onToggleComplete}>
                {task.completed ? 'Пометить как выполненное' : 'Не выполненное'}
            </button>
            <button onClick={onDelete}>Удалить</button>
        </div>
    );
};

export default Task;