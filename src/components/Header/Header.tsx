import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Приложение задач</div>
            <nav>
                <Link to="/">Главная</Link>
                <Link to="/login">Логин</Link>
                <Link to="/register">Регистрация</Link>
            </nav>
        </header>
    );
};

export default Header;