import { useState } from 'react';
import ChainNav from './ChainNav';
import CurrentChainAddresses from './CurrentChainAddresses';

import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { createWallet, getDerivedPath } from './utils';

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
    <>
      <div className='flex flex-col'>
        <button
          className='bg-blue-500 p-3 w-fit mx-auto m-5 rounded-md'
          onClick={genMemonic}
        >
          Generte Memonic
        </button>
        <div className='bg-slate-300 text-3xl text-center m-5 p-4 rounded'>
          {mnemonic && mnemonic}
        </div>
      </div>
      <ChainNav setChain={setChain} chains={chains} />
      {mnemonic && (
        <div>
          <button className='rounded bg-red-400 mx-10 p-4 py-2' onClick={createAddress}>
            Create Address
          </button>
        </div>
      )}

      <div className='text-center'>
        {currentChainAddresses.length !== 0 ? (
          <CurrentChainAddresses currentChainAddresses={currentChainAddresses} />
        ) : (
          <div>No wallets to show</div>
        )}
      </div>
    </>
  );
}
