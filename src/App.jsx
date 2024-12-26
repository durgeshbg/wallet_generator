import { Children, useState } from 'react';
import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { derivePath } from 'ed25519-hd-key';
import * as bitcoin from 'bitcoinjs-lib';
import { Wallet } from 'ethers';
import { Keypair } from '@solana/web3.js';

export default function App() {
  const [mnemonic, setMnemonic] = useState();
  const [seed, setSeed] = useState();
  const [chain, setChain] = useState(0);
  const chains = {
    bitcoin: 0,
    ethereum: 60,
    solana: 501,
  };
  const [accountIndex, setAccountIndex] = useState({
    [chains['bitcoin']]: 0,
    [chains['ethereum']]: 0,
    [chains['solana']]: 0,
  });
  const [addressIndex, setAddressIndex] = useState({
    [chains['bitcoin']]: 0,
    [chains['ethereum']]: 0,
    [chains['solana']]: 0,
  });

  function genMemonic() {
    try {
      setMnemonic(generateMnemonic(wordlist));
      setSeed(mnemonicToSeedSync(mnemonic));
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function createAddress() {
    let derivationPath = `m/44'/${chain}'/${accountIndex[chain]}'/0`;
    if (chain === chains['solana']) {
      derivationPath += "'";
    } else {
      derivationPath += `/${addressIndex[chain]}`;
    }

    if (chain === chains['solana']) {
      // create solana wallet
    } else if (chain === chains['bitcoin']) {
      // create bitcoin wallet
    } else if (chain === chains['ethereum']) {
      // create ethereum wallet
    }
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
      <div className='flex flex-col'>
        <h2 className='text-center text-2xl'>Chains</h2>
        <div className='mx-auto'>
          <button
            className='rounded bg-red-400 mx-10 p-4 py-2'
            onClick={() => setChain(chains['solana'])}
          >
            Solona
          </button>
          <button
            className='rounded bg-red-400 mx-10 p-4 py-2'
            onClick={() => setChain(chains['ethereum'])}
          >
            Ethereum
          </button>
          <button
            className='rounded bg-red-400 mx-10 p-4 py-2'
            onClick={() => setChain(chains['bitcoin'])}
          >
            Bitcoin
          </button>
        </div>
        <div>
          <button className='rounded bg-red-400 mx-10 p-4 py-2' onClick={createAddress}>
            Create Address
          </button>
        </div>
      </div>
    </>
  );
}
