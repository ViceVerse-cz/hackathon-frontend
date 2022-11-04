import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-bootstrap-icons';

import { api } from '../../services/api';


export default function SingUp() {
    const history = useNavigate();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateBack() {
        history('/');
    }


    const inputStyle = `bg-dark-500 border-gray-300 text-sm rounded-md border-dark-50 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-indigo-500 w-full`;


    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        if (name === '' || email === '' || password === '') {
            return;
        }

        const data = {
            name,
            surname,
            email,
            password,
        };

        await api.post('/api/employee/register', data);
        history('/');
    }

    return (
        <div className='bg-black w-full h-[100vh] gradient' id="SingUp">
            <span>&nbsp;</span>

            <form className="content w-[500px] h-fit mt-52 ml-auto mr-auto bg-black p-5 rounded-xl" onSubmit={handleSubmit}>
                <ArrowLeft
                    className="icon"
                    size={24}
                    color="#6366f1"
                    onClick={handleNavigateBack}
                />

                <h1 className='text-3xl text-white font-black'>Create a new account</h1>

                <div className='inline-flex mb-3 mt-3'>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Jméno</label>
                        <input
                            type="text"
                            id="name"
                            name='name'
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className={inputStyle}
                            placeholder="John"
                            required
                        />
                    </div>

                    <div className='ml-6'>
                        <label className="block mb-2 text-sm font-medium text-white">Příjmení</label>
                        <input
                            type="text"
                            id="surname"
                            name='surname'
                            value={surname}
                            onChange={e => setSurname(e.target.value)}
                            className={inputStyle}
                            placeholder="Asshole2"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 text-sm mt-3 font-medium text-white">Email</label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={inputStyle}
                        placeholder="example@gmail.com"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-2 mt-3 text-sm font-medium text-white">Heslo</label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className={inputStyle}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="********"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className='w-full mt-8 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-600'
                >
                    Registrovat se
                </button>
            </form>
        </div>
    );
}