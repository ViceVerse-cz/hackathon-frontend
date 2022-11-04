import { useRoutes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

export default function AuthRoutes() {
    const routes = [
        {
            path: '/dashboard',
            element: <Dashboard />
        }
    ];
    return useRoutes(routes);
}