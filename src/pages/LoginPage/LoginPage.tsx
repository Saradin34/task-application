import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import styles from './LoginPage.module.scss';

const LoginPage: React.FC = () => {
    return (
        <div className={styles.loginPage}>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

export default LoginPage;