import { useRoutes } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';


export default function AuthRoutes() {
    const routes = [
        {
            path: '/',
            element: <SignIn />
        },
        {
            path: '/signup',
            element: <SignUp />
        }
    ];

    return useRoutes(routes);
}