import { Link, Outlet } from 'react-router';

export default function Mnemonic() {
  return (
    <>
      <div className='flex justify-center gap-5'>
        <Link to={''} className='btn glass md:btn-wide'>
          Generate new mnemonic
        </Link>
        <Link to={'/add'} className='btn glass md:btn-wide'>
          Add existing mnemonic
        </Link>
      </div>
      <Outlet />
    </>
  );
}
