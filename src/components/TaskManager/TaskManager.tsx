import React, { useState } from 'react';
import { addTask, getTasks, updateTask, deleteTask } from '../../services/database';
import { Box, TextField, Button, Paper, Typography, List, ListItem, ListItemText, IconButton } from '@mui/material';
import { Delete, CheckCircle } from '@mui/icons-material';

const TaskManager: React.FC = () => {
    const [tasks, setTasks] = useState<{ id: string; title: string; description: string; completed: boolean }[]>([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    const userId = 'currentUserId'; // Замените на ID текущего пользователя

    const loadTasks = async () => {
        const tasks = await getTasks(userId);
        setTasks(tasks);
    };

    const handleAddTask = async () => {
        if (newTaskTitle.trim()) {
            await addTask({ title: newTaskTitle, description: newTaskDescription, userId });
            setNewTaskTitle('');
            setNewTaskDescription('');
            await loadTasks();
        }
    };

    const handleToggleComplete = async (id: string, completed: boolean) => {
        await updateTask(id, { completed: !completed });
        await loadTasks();
    };

    const handleDeleteTask = async (id: string) => {
        await deleteTask(id);
        await loadTasks();
    };

    React.useEffect(() => {
        loadTasks();
    }, []);

    return (
        <Paper elevation={3} sx={{ padding: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Менеджер задач
            </Typography>

            {/* Форма добавления задачи */}
            <Box sx={{ display: 'flex', gap: 2, marginBottom: 2 }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Название задачи"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Описание задачи"
                    value={newTaskDescription}
                    onChange={(e) => setNewTaskDescription(e.target.value)}
                />
                <Button variant="contained" onClick={handleAddTask}>
                    Добавить
                </Button>
            </Box>

            {/* Список задач */}
            <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {tasks.map((task) => (
                    <Paper
                        key={task.id}
                        elevation={2}
                        sx={{
                            padding: 2,
                            borderRadius: 2,
                            backgroundColor: task.completed ? '#e0f7fa' : '#ffffff',
                            minWidth: '200px',
                        }}
                    >
                        <ListItemText
                            primary={task.title}
                            secondary={task.description}
                            sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                        />
                        <Box sx={{ display: 'flex', gap: 1, marginTop: 1 }}>
                            <IconButton onClick={() => handleToggleComplete(task.id, task.completed)}>
                                <CheckCircle color={task.completed ? 'success' : 'action'} />
                            </IconButton>
                            <IconButton onClick={() => handleDeleteTask(task.id)}>
                                <Delete color="error" />
                            </IconButton>
                        </Box>
                    </Paper>
                ))}
            </List>
        </Paper>
    );
};

export default TaskManager;