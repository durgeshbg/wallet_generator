import { Link, Navigate, useOutletContext } from 'react-router';
import Wallet from './WalletItem';
import AddSVG from '../../assets/svgs/AddSVG';
import BitCoinSVG from '../../assets/svgs/BitCoinSVG';
import SolanaSVG from '../../assets/svgs/SolanaSVG';
import EthereumSVG from '../../assets/svgs/EthereumSVG';
import ArrowSVG from '../../assets/svgs/ArrowSVG';

export default function CurrentChainAccounts() {
  const [
    currentChainAccounts,
    mnemonic,
    chain,
    chains,
    genMemonic,
    createAddress,
    setChain,
  ] = useOutletContext();

  if (!mnemonic) {
    alert('Please add set your mnemonic first!');
    return <Navigate to={'/'} />;
  }

  return (
    <>
      <h2 className='text-center text-5xl'>
        <div className='text-xl uppercase'>Current chain</div>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn m-1 flex'>
            {chain === chains['bitcoin'] && <BitCoinSVG />}
            {chain === chains['solana'] && <SolanaSVG />}
            {chain === chains['ethereum'] && <EthereumSVG />}
            {chain === chains['ethereum'] && 'Ethereum'}
            {chain === chains['bitcoin'] && 'BitCoin'}
            {chain === chains['solana'] && 'Solana'}
            <span className='ml-5'>
              <ArrowSVG />
            </span>
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
          >
            <li>
              <Link onClick={() => setChain(chains['bitcoin'])}>
                <BitCoinSVG />
                <span>Bitcoin</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => setChain(chains['solana'])}>
                <SolanaSVG />
                <span>Solona</span>
              </Link>
            </li>
            <li>
              <Link onClick={() => setChain(chains['ethereum'])}>
                <EthereumSVG />
                <span>Ethereum</span>
              </Link>
            </li>
          </ul>
        </div>
      </h2>
      <div>
        <button className='flex btn btn-outline mx-3 ml-auto' onClick={createAddress}>
          <AddSVG />
          <span>Create Address</span>
        </button>
      </div>
      {currentChainAccounts.map((wallet) => (
        <Wallet key={wallet.address} wallet={wallet} chain={chain} chains={chains} />
      ))}
    </>
  );
}
