import Header from '../components/Header';

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col'>
      <Header />
      {children}
    </div>
  );
};

export default GuestLayout;
