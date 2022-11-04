import { useAuth } from '../../contexts/auth';
import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


export default function SignIn() {
    const { signed, signIn } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const inputStyle = `bg-dark-500 border-gray-300 text-sm rounded-md border-dark-50 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-indigo-500 w-full`;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        if (email === '' || password === '') {
            return;
        }

        signIn(email, password);
    }

    return (
        <div 
            className='bg-black w-full h-[100vh] gradient' 
            id="SingIn"
        >
            <span>&nbsp;</span>

            <motion.form 
                className="content w-[500px] h-fit mt-52 ml-auto mr-auto bg-black  p-5 rounded-xl" 
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ 
                    duration: 0.5, 
                    stiffness: 50,
                    damping: 10 
                }}
            >
                <h1 className='text-3xl text-white font-black'>Přihlášení</h1>

                <div>
                    <label className="block mb-2 text-sm mt-4 font-medium text-white">Email</label>
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
                    <label className="block mb-2 mt-4 text-sm font-medium text-white">Heslo</label>
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
                    className='w-full mt-8 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md hover:bg-indigo-600'
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
            </motion.form>
        </div>
    );
}