import { Link, Navigate } from 'react-router';
import Wallet from './WalletItem';
import AddSVG from '../../assets/svgs/AddSVG';
import BitCoinSVG from '../../assets/svgs/BitCoinSVG';
import SolanaSVG from '../../assets/svgs/SolanaSVG';
import EthereumSVG from '../../assets/svgs/EthereumSVG';
import ArrowSVG from '../../assets/svgs/ArrowSVG';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  accountIndexSelector,
  accountsAtom,
  chainsAtom,
  chainSelector,
  currentChainAccountsSelector,
  seedAtom,
  mnemonicAtom,
} from '../../Atom';
import { createWallet, getDerivedPath } from '../../utils';

export default function CurrentChainAccounts() {
  const mnemonic = useRecoilValue(mnemonicAtom);
  const [chain, setChain] = useRecoilState(chainSelector);
  const chains = useRecoilValue(chainsAtom);
  const currentChainAccounts = useRecoilValue(currentChainAccountsSelector);
  const seed = useRecoilValue(seedAtom);
  const [accountIndex, setAccountIndex] = useRecoilState(accountIndexSelector);
  const [accounts, setAccounts] = useRecoilState(accountsAtom);

  function createAddress() {
    if (!mnemonic) {
      alert('Please add your mnemonic first!');
      return;
    }
    const derivationPath = getDerivedPath(chains, chain, accountIndex[chain]);
    const wallet = createWallet(mnemonic, derivationPath, seed, chain, chains);
    setAccounts([...accounts, wallet]);
    setAccountIndex((current) => {
      return {
        ...current,
        [chain]: current[chain] + 1,
      };
    });
  }

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
