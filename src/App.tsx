import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { onAuthChange } from './services/auth';

const App: React.FC = () => {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthChange((user) => {
            setUser(user ? user.email : null);
        });
        return () => unsubscribe();
    }, []);

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={user ? <HomePage /> : <Navigate to="/login" />} />
                <Route path="/login" element={!user ? <LoginPage /> : <Navigate to="/" />} />
                <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;