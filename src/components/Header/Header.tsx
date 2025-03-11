import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, onAuthChange } from '../../services/auth';
import { Avatar } from '@mui/material';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            setUsername(user ? user.displayName : null); // Используем displayName
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Ошибка выхода:', error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Task App</div>
            <nav>
                <Link to="/">Главная</Link>
                {username ? (
                    <>
                        <div className={styles.userInfo}>
                            <Avatar>{username[0]}</Avatar> {/* Первая буква username */}
                            <span>{username}</span>
                        </div>
                        <button onClick={handleLogout}>Выйти</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Войти</Link>
                        <Link to="/register">Регистрация</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;