import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, onAuthChange } from '../../services/auth';
import { setUserOnline, setUserOffline } from '../../services/users';
import { Avatar } from '@mui/material';
import styles from './Header.module.scss';
import { auth } from '../../firebase'; // Убедитесь, что вы импортируете auth

const Header: React.FC = () => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            if (user) {
                setUsername(user.displayName);
                setUserOnline(user.uid, user.displayName || 'Anonymous'); // Устанавливаем пользователя как онлайн
            } else {
                setUsername(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            console.log('Выход из системы...'); // Лог перед выходом
            if (username) {
                setUserOffline(auth.currentUser?.uid || ''); // Удаляем пользователя из онлайн
            }
            await logout(); // Выход из аккаунта
            console.log('Пользователь вышел из системы'); // Лог после выхода
        } catch (error) {
            console.error('Ошибка выхода:', error); // Обработка ошибки
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
                            <Avatar>{username[0]}</Avatar>
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

export default Header