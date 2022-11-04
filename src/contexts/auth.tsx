import React, { useState, useEffect, createContext, useContext } from 'react';
import { api } from '../services/api';

interface User {
    name: string;
    email: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface Props {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = localStorage.getItem('user');
            const storageToken = localStorage.getItem('token');

            if (storageUser && storageToken) {
                setUser(JSON.parse(storageUser));
                api.defaults.headers['Authorization'] = `${storageToken}`;
            }
        }

        loadStorageData();
        setLoading(false);
    }, []);

    async function signIn(email: string, password: string) {
        const response = await api.post('/api/employee/login', { email, password });

        setUser(response.data.user);

        api.defaults.headers['Authorization'] = `${response.data.token}`;

        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
    }

    function signOut() {
        localStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{ signed: !!user, user, loading, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}