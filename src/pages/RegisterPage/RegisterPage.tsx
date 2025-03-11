import React from 'react';
import RegisterForm from '../../components/Auth/RegisterForm';
import styles from './RegisterPage.module.scss';

const RegisterPage: React.FC = () => {
    return (
        <div className={styles.registerPage}>
            <h1>Register</h1>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;