import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

import { api } from '../../services/api';

export default function SingUp() {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateBack() {
        history('/');
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (name === '' || email === '' || password === '') {
            return;
        }

        const data = {
            name,
            email,
            password,
        };

        await api.post('/api/employee/register', data);
        history('/');
    }

    return (
        <div id="SingUp">
            <form className="content" onSubmit={handleSubmit}>
                <ArrowLeft
                    className="icon"
                    size={24}
                    color="#15b6d6"
                    onClick={handleNavigateBack}
                />

                <h1>Sing Up</h1>

                <div className="input-group">
                    <p>Name</p>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </div>

                <div className="input-group">
                    <p>Email</p>
                    <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div className="input-group">
                    <p>Password</p>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>

                <button type="submit">Sing Up</button>
            </form>
        </div>
    );
}