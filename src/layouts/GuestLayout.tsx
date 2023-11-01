import { Outlet } from 'react-router-dom';

const GuestLayout = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
