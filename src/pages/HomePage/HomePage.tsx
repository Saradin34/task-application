import React from 'react';
import { Box, Grid } from '@mui/material';
import TaskManager from '../../components/TaskManager/TaskManager';
import OnlineUsers from '../../components/Sidebar/OnlineUsers';
import Chat from '../../components/Sidebar/Chat';

const HomePage: React.FC = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <OnlineUsers />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TaskManager />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Chat />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;