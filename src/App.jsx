import Header from './components/Header/Header';
import { Outlet } from 'react-router';

export default function App() {
  return (
    <>
      <Header />
      <div className='flex flex-col bg-gradient-to-r'>
        <Outlet />
      </div>
    </>
  );
}
