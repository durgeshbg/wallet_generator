import { useState } from 'react';
import ChainNav from './ChainNav';
import CurrentChainAddresses from './CurrentChainAddresses';

import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { createWallet, getDerivedPath } from './utils';
import Mnemonic from './Mnemonic';

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
    <div className='bg-[url("/wavey-fingerprint.svg")] min-h-screen'>
      <h1 className='text-center bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-5xl md:text-7xl font-semibold py-5'>
        Wallet Generator
      </h1>
      <div className='flex flex-col bg-gradient-to-r'>
        <button onClick={genMemonic}>
          <div className='relative flex w-fit h-fit items-center justify-center border-4 border-purple-700 rounded-lg bg-purple-900 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent px-3 py-4 mx-auto font-semibold text-xl'>
            Generate Mnemonic
          </div>
        </button>

        <Mnemonic mnemonic={mnemonic} />
      </div>
      <ChainNav
        setChain={setChain}
        chains={chains}
        chain={chain}
        createAddress={createAddress}
        mnemonic={mnemonic}
      />

      <div className='text-center flex flex-col'>
        {currentChainAddresses.length !== 0 ? (
          <CurrentChainAddresses currentChainAddresses={currentChainAddresses} />
        ) : (
          <div className='text-white my-3 text-xl'>No wallets to show</div>
        )}
      </div>
    </div>
  );
}
