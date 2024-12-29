import { useState } from 'react';

import { mnemonicToSeedSync, generateMnemonic, validateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { createWallet, getDerivedPath } from './utils';
import Header from './Header';
import { Navigate, Outlet, redirect } from 'react-router';

export default function App() {
  const [mnemonic, setMnemonic] = useState();
  const [seed, setSeed] = useState();
  const chains = {
    bitcoin: 0,
    ethereum: 60,
    solana: 501,
  };
  const [chain, setChain] = useState(chains['bitcoin']);
  const [accountIndex, setAccountIndex] = useState({
    [chains['bitcoin']]: 0,
    [chains['ethereum']]: 0,
    [chains['solana']]: 0,
  });
  const [accounts, setAccounts] = useState([]);
  const currentChainAccounts = accounts.filter((acc) => acc.walletChain === chain);

  function genMemonic() {
    try {
      const mnemonic = generateMnemonic(wordlist);
      setMnemonic(mnemonic);
      setSeed(mnemonicToSeedSync(mnemonic));
      setAccounts([]);
      setAccountIndex({
        [chains['bitcoin']]: 0,
        [chains['ethereum']]: 0,
        [chains['solana']]: 0,
      });
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function addMnemonic(userMnemonic) {
    const result = validateMnemonic(userMnemonic, wordlist);
    if (result) {
      setMnemonic(userMnemonic);
      setSeed(mnemonicToSeedSync(mnemonic));
      setAccounts([]);
      setAccountIndex({
        [chains['bitcoin']]: 0,
        [chains['ethereum']]: 0,
        [chains['solana']]: 0,
      });
    }
    return result;
  }

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
      <Header chains={chains} setChain={setChain} createAddress={createAddress} />

      <div className='flex flex-col bg-gradient-to-r'>
        <Outlet
          context={[
            currentChainAccounts,
            mnemonic,
            chain,
            chains,
            genMemonic,
            createAddress,
            setChain,
            addMnemonic,
          ]}
        />
      </div>
    </>
  );
}
