import { Outlet } from 'react-router-dom';

const AuthenticatedLayout = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <Outlet />
    </div>
  );
};

export default AuthenticatedLayout;
