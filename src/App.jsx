import { createWallet, getDerivedPath } from './utils';
import Header from './components/Header/Header';
import { Outlet } from 'react-router';
import {
  accountIndexSelector,
  accountsAtom,
  chainsAtom,
  chainSelector,
  currentChainAccountsSelector,
  mnemonicAtom,
  seedAtom,
} from './Atom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

export default function App() {
  const mnemonic = useRecoilValue(mnemonicAtom);
  const seed = useRecoilValue(seedAtom);
  const chains = useRecoilValue(chainsAtom);
  const [chain, setChain] = useRecoilState(chainSelector);
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

  return (
    <>
      <Header />
      <div className='flex flex-col bg-gradient-to-r'>
        <Outlet />
      </div>
    </>
  );
}
