import { Link } from 'react-router';
import AddSVG from './assets/svgs/AddSVG';
import BitCoinSVG from './assets/svgs/BitCoinSVG';
import EthereumSVG from './assets/svgs/EthereumSVG';
import SolanaSVG from './assets/svgs/SolanaSVG';

function Header({ chains, setChain, createAddress }) {
  return (
    <header className='flex px-3 py-2 justify-between'>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost bg-gradient-to-r from-yellow-500 to-red-500 text-transparent bg-clip-text text-3xl md:text-4xl font-semibold'>
            Wallet Generator
          </a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to={'/accounts'} onClick={createAddress}>
                <span>Add Account</span>
                <AddSVG />
              </Link>
            </li>
            <li>
              <details>
                <summary>Switch Chain</summary>
                <ul className='bg-base-100 rounded-t-none p-2 z-10'>
                  <li>
                    <Link to={'/accounts'} onClick={() => setChain(chains['bitcoin'])}>
                      <BitCoinSVG />
                      <span>Bitcoin</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/accounts'} onClick={() => setChain(chains['solana'])}>
                      <SolanaSVG />
                      <span>Solona</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/accounts'} onClick={() => setChain(chains['ethereum'])}>
                      <EthereumSVG />
                      <span>Ethereum</span>
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
