import React, { useState } from 'react';
import Task from './Task';
import styles from './TaskManager.module.scss';

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<Array<{ id: string; title: string; description: string }>>([]);

    const addTask = () => {
        const newTask = {
            id: Date.now().toString(),
            title: 'New Task',
            description: 'Task description',
        };
        setTasks([...tasks, newTask]);
    };

    return (
        <div className={styles.taskManager}>
            <button onClick={addTask}>Добавить задачу</button>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default TaskManager;