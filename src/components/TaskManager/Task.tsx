import React from 'react';
import styles from './TaskManager.module.scss';

interface TaskProps {
    task: {
        id: string;
        title: string;
        description: string;
    };
}

const Task: React.FC<TaskProps> = ({ task }) => {
    return (
        <div className={styles.task}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
        </div>
    );
};

export default Task;