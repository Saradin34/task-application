import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, onAuthChange } from '../../services/auth';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            setUser(user ? user.email : null);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>Task App</div>
            <nav>
                <Link to="/">Home</Link>
                {user ? (
                    <>
                        <span>Welcome, {user}</span>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;