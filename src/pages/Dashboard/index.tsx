import { useBuilding } from '../../contexts/building';
import Building from './components/BuildingLayout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import Navbar from './components/Navbar';
import Map from './components/Map';

export default function Dashboard() {
    const history = useNavigate();
    const { signOut, user } = useAuth();
    const { active } = useBuilding();

    function handleSingOut() {
        signOut();
        history('/');
    }

    return (
        <div className='flex flex-row h-screen'>
            <Navbar user={user} handleSingOut={signOut} />
            {active ? <Building /> : <></>}

            <Map />
        </div>
    );
}