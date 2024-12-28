import { useState } from 'react';
import CurrentChainAddresses from './CurrentChainAddresses';

import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { createWallet, getDerivedPath } from './utils';
import Mnemonic from './Mnemonic';
import Header from './Header';

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
  const currentChainAddresses = accounts.filter((acc) => acc.walletChain === chain);

  function genMemonic() {
    try {
      const mnemonic = generateMnemonic(wordlist);
      setMnemonic(mnemonic);
      setSeed(mnemonicToSeedSync(mnemonic));
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function createAddress() {
    if (!mnemonic) {
      alert('Please add your mnemonic first');
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
        <button
          className='relative flex w-max h-fit items-center justify-center border-4 border-purple-700 rounded-lg bg-purple-900 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent p-2 mx-auto my-3 font-semibold text-xl'
          onClick={genMemonic}
        >
          Generate Mnemonic
        </button>

        <Mnemonic mnemonic={mnemonic} />
      </div>

      <div className='text-center flex flex-col'>
        {currentChainAddresses.length !== 0 ? (
          <CurrentChainAddresses currentChainAddresses={currentChainAddresses} />
        ) : (
          <div className='text-white my-3 text-xl'>No wallets to show</div>
        )}
      </div>
    </>
  );
}
