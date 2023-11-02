import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Spinner } from './components/Spinner';

import './App.css';

const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Users = lazy(() => import('./pages/Users'));

function App() {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center w-full h-full'>
          <Spinner size='icon' />
        </div>
      }>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Users' element={<Users />} />
      </Routes>
    </Suspense>
  );
}

export default App;
