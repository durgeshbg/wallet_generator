import { useState } from 'react';
import ChainNav from './ChainNav';

import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { derivePath } from 'ed25519-hd-key';

import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';

import { HDNodeWallet } from 'ethers';

import { Keypair } from '@solana/web3.js';

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
  const [addressIndex, setAddressIndex] = useState({
    [chains['bitcoin']]: 0,
    [chains['ethereum']]: 0,
    [chains['solana']]: 0,
  });

  function genMemonic() {
    try {
      const mnemonic = generateMnemonic(wordlist);
      setMnemonic(mnemonic);
      setSeed(mnemonicToSeedSync(mnemonic));
      console.log(seed);
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
      // create ethereum wallet
      const deriveSeed = derivePath(derivationPath, seed);
      const keyPair = Keypair.fromSeed(deriveSeed.key);
      console.log(keyPair);
    } else if (chain === chains['bitcoin']) {
      // create bitcoin wallet
      const bip32 = BIP32Factory(ecc);
      const node = bip32.fromSeed(Buffer.from(seed));
      const child = node.derivePath(derivationPath);
      console.log(child.publicKey.toString('hex'), child.toWIF());
    } else if (chain === chains['ethereum']) {
      // create ethereum wallet
      const wallet = HDNodeWallet.fromPhrase(mnemonic, derivationPath);
      console.log(wallet);
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
      <ChainNav setChain={setChain} chains={chains} />
      {mnemonic && (
        <div>
          <button className='rounded bg-red-400 mx-10 p-4 py-2' onClick={createAddress}>
            Create Address
          </button>
        </div>
      )}
    </>
  );
}
