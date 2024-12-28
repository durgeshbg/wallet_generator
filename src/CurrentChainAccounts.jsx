import { Navigate, useOutletContext } from 'react-router';
import Wallet from './Wallet';

export default function CurrentChainAccounts() {
  const [currentChainAccounts, mnemonic, chain, chains] = useOutletContext();

  if (!mnemonic) return <Navigate to={'/mnemonic'} />;

  return (
    <>
      <h2 className='text-center text-3xl'>
        {chain === chains['bitcoin'] && 'Bitcoin'}
        {chain === chains['solana'] && 'Solana'}
        {chain === chains['ethereum'] && 'Ethereum'}
      </h2>
      {currentChainAccounts.map((wallet) => (
        <Wallet key={wallet.address} wallet={wallet} chain={chain} chains={chains} />
      ))}
    </>
  );
}
