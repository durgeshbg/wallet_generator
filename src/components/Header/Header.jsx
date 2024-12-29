import { Link } from 'react-router';

function Header({ chains, setChain, createAddress }) {
  return (
    <header className='flex px-3 py-2 justify-between'>
      <div className='navbar bg-base-200 rounded-md shadow-md flex-wrap'>
        <div className='flex-1'>
          <a className='btn btn-ghost bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text text-3xl md:text-4xl font-semibold mr-10'>
            Wallet Generator
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal'>
            <li>
              <Link to={'/'}>
                <span>Mange Memonic</span>
              </Link>
            </li>
            <li>
              <Link to={'/accounts'}>
                <span>Manage Account</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
