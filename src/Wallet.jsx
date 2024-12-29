import { Link, Navigate, useOutletContext, useParams } from 'react-router';
import SolanaAccountInfo from './SolanaAccountInfo';
import BitcoinAccountInfo from './BitcoinAccountInfo';
import EthereumAccountInfo from './EthereumAccountInfo';

function Wallet() {
  const { id } = useParams();
  const [
    currentChainAccounts,
    mnemonic,
    chain,
    chains,
    genMemonic,
    createAddress,
    setChain,
    addMnemonic,
  ] = useOutletContext();
  const currentAccount = currentChainAccounts.find(
    (account) => account.address === id && account.walletChain === chain
  );

  if (!mnemonic) return <Navigate to='/' />;

  return (
    <div>
      <Link className='link-accent underline px-4' to={'/accounts'}>
        ⬅️ Return back
      </Link>
      <div className='flex w-full flex-col items-center text-2xl font-extrabold leading-9 justify-center'>
        {chain === chains['bitcoin'] && <BitcoinAccountInfo account={currentAccount} />}
        {chain === chains['solana'] && <SolanaAccountInfo account={currentAccount} />}
        {chain === chains['ethereum'] && <EthereumAccountInfo account={currentAccount} />}
      </div>
    </div>
  );
}

export default Wallet;
