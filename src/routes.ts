import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const AuthenticatedLayout = lazy(() => import('./layouts/AuthenticatedLayout'));
const GuestLayout = lazy(() => import('./layouts/GuestLayout'));

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));

export default function Router() {
  return useRoutes([{}]);
}
