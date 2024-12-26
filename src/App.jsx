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
      <h1 className='text-center bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-7xl font-semibold py-5'>
        Wallet Generator
      </h1>
      <div className='flex flex-col bg-gradient-to-r'>
        <button onClick={genMemonic}>
          <div className='relative flex w-fit h-fit items-center justify-center border-4 border-purple-700 rounded-lg bg-purple-900 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent px-3 py-4 mx-auto font-semibold text-xl my-6'>
            Generate Mnemonic
          </div>
        </button>

        <Mnemonic mnemonic={mnemonic} />
      </div>
      <ChainNav setChain={setChain} chains={chains} chain={chain} />
      {mnemonic && (
        <button
          className='rounded-md bg-slate-700 mx-10 p-4 py-2'
          onClick={createAddress}
        >
          <div className='flex items-center gap-2'>
            <div className='text-white' >Create Address</div>
            <div>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Render--Streamline-Simple-Icons" height="24" width="24"><desc>Render Streamline Icon: https://streamlinehq.com</desc><title>Render</title><path d="M18.263 0.007c-3.121 -0.147 -5.744 2.109 -6.192 5.082 -0.018 0.138 -0.045 0.272 -0.067 0.405 -0.696 3.703 -3.936 6.507 -7.827 6.507 -1.388 0 -2.691 -0.356 -3.825 -0.979a0.2024 0.2024 0 0 0 -0.302 0.178V24H12v-8.999c0 -1.656 1.338 -3 2.987 -3h2.988c3.382 0 6.103 -2.817 5.97 -6.244 -0.12 -3.084 -2.61 -5.603 -5.682 -5.75" fill="#ffffff" strokeWidth="1"></path></svg>
            </div>
          </div>
        </button>
      )}

      <div className='text-center flex flex-col'>
        {currentChainAddresses.length !== 0 ? (
          <CurrentChainAddresses currentChainAddresses={currentChainAddresses} />
        ) : (
          <div className='text-white'>No wallets to show</div>
        )}
      </div>
    </div>
  );
}
