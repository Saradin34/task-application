import React, { useEffect, useState } from 'react';
import { getOnlineUsers } from '../../services/users';
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';

const OnlineUsers: React.FC = () => {
    const [users, setUsers] = useState<{ id: string; username: string }[]>([]);

    useEffect(() => {
        getOnlineUsers((users) => setUsers(users));
    }, []);

    return (
        <Paper
            elevation={3}
            sx={{
                padding: 2,
                borderRadius: 2,
                backgroundColor: '#f5f5f5',
                height: '100%',
                overflow: 'auto',
            }}
        >
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
                Онлайн пользователи
            </Typography>
            <List>
                {users.map((user) => (
                    <ListItem key={user.id} sx={{ padding: 0 }}>
                        <ListItemAvatar>
                            <Avatar>{user.username[0]}</Avatar> {/* Первая буква username */}
                        </ListItemAvatar>
                        <ListItemText primary={user.username} />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default OnlineUsers;