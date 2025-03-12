import React, { useState } from 'react';
import { login } from '../../services/auth';
import { setUserOnline } from '../../services/users';
import styles from './Auth.module.scss';

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const userCredential = await login(email, password);
            const user = userCredential.user;
            if (user) {
                setUserOnline(user.uid, user.displayName || 'Anonymous');
            }
        } catch (error) {
            setError('Ошибка входа: ' + error.message);
            console.error('Ошибка входа:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.authForm}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;