import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';
import { useBuilding } from '../../contexts/building';
import Building from './components/BuildingLayout';
import Map from './components/Map';
import Navbar from './components/Navbar';

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