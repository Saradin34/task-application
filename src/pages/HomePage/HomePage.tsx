import React from 'react';
import TaskManager from '../../components/TaskManager/TaskManager';
import OnlineUsers from '../../components/Sidebar/OnlineUsers';
import Chat from '../../components/Sidebar/Chat';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    return (
        <div className={styles.homePage}>
            <div className={styles.sidebar}>
                <OnlineUsers />
            </div>
            <div className={styles.mainContent}>
                <TaskManager />
            </div>
            <div className={styles.sidebar}>
                <Chat />
            </div>
        </div>
    );
};

export default HomePage;