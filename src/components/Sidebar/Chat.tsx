import React, { useEffect, useState } from 'react';
import { sendMessage, getMessages } from '../../services/chat';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, TextField, Button, Typography } from '@mui/material';

const Chat: React.FC = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<{ id: string; user: string; message: string }[]>([]);

    useEffect(() => {
        getMessages((messages) => setMessages(messages));
    }, []);

    const handleSendMessage = () => {
        if (message.trim()) {
            const user = 'Current User'; // Замените на текущего пользователя
            sendMessage(message, user);
            setMessage('');
        }
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: '#f5f5f5',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Чат
            </Typography>
            <List sx={{ flex: 1, overflow: 'auto', marginBottom: 2 }}>
                {messages.map((msg) => (
                    <ListItem key={msg.id} sx={{ padding: 0 }}>
                        <ListItemAvatar>
                            <Avatar>{msg.user[0]}</Avatar> {/* Первая буква username */}
                        </ListItemAvatar>
                        <ListItemText primary={msg.user} secondary={msg.message} />
                    </ListItem>
                ))}
            </List>
            <div style={{ display: 'flex', gap: '8px' }}>
                <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Введите сообщение..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Button variant="contained" onClick={handleSendMessage}>
                    Отправить
                </Button>
            </div>
        </Paper>
    );
};

export default Chat;