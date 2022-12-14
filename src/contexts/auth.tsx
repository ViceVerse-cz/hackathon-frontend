import React, { useState, useEffect, createContext, useContext } from 'react';
import { api } from '../services/api';
import { User, AuthContextData} from '../interfaces/user.interface';

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
        const data = response.data.data;

        setUser(data.employee);

        api.defaults.headers['Authorization'] = `${data.token}`;

        localStorage.setItem('user', JSON.stringify(data.employee));
        localStorage.setItem('token', data.token);
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