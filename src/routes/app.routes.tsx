import { useRoutes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';

export default function AuthRoutes() {
    const routes = [
        {
            path: '/',
            element: <Dashboard />
        }
    ];
    return useRoutes(routes);
}