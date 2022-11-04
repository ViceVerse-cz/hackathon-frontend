import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';


export default function SignIn() {
    const { signed, signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputStyle = `bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 bg-gray-700
    border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 w-full`;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (email === '' || password === '') {
            return;
        }

        signIn(email, password);
    }

    return (
        <div className='bg-slate-700 w-full h-[100vh]' id="SingIn">
            <span>&nbsp;</span>

            <form className="content w-[500px] h-fit mt-52 ml-auto mr-auto bg-[#1e293b] p-5 rounded-lg" onSubmit={handleSubmit}>
                <h1 className='text-3xl text-white'>Přihlášení</h1>

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
                    <label className="block mb-2 mt-3 text-sm font-medium text-white">Password</label>
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
                    className='w-full mt-8 py-2 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-blue-600'
                >
                    Přihlásit se
                </button>

                <div className='w-fit ml-auto mr-auto mt-5'>
                    <div className='text-center'> 
                        <Link 
                            to="/signup"
                            className='text-indigo-500 mt-2'
                        >
                            Vytvořit účet.
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );
}