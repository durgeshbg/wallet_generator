import { mnemonicToSeedSync, generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { useState } from 'react';

export default function App() {
  const [mnemonic, setMnemonic] = useState();
  const [seed, setSeed] = useState();

  function getMemonic() {
    try {
      setMnemonic(generateMnemonic(wordlist));
    } catch (error) {
      console.error('Error generating mnemonic:', error);
    }
  }

  function getSeed() {
    try {
      const seed = mnemonicToSeedSync(mnemonic);
      setSeed(seed);
    } catch (error) {
      console.error('Error generating seed:', error);
    }
  }

  return (
    <>
      <button className='bg-blue-500 p-3 m-2' onClick={getMemonic}>
        Generte Memonic
      </button>
      <div className='bg-slate-300 text-3xl text-center m-5 p-4 rounded'>
        {mnemonic && mnemonic}
      </div>
      <button className='bg-blue-500 p-3 m-2' onClick={getSeed}>
        Get seed
      </button>
      <p className='bg-slate-300 text-xl text-center m-5 p-4 rounded container w-auto h-auto'>
        {seed && Buffer.from(seed).toString('hex')}
      </p>
    </>
  );
}
