import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Map from './components/Map';
import Navbar from './components/Navbar';

export default function Dashboard() {
    const history = useNavigate();
    const { signOut, user } = useAuth();

    function handleSingOut() {
        signOut();
        history('/');
    }

    return (
        <div className='flex flex-row h-screen'>
            <Navbar user={user} handleSingOut={signOut}/>
            <Map />
        </div>
    );
}