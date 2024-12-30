import DisplayMnemonic from './DisplayMnemonic';
import { mnemonicToSeedSync, generateMnemonic, validateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { accountIndexAtom, accountsAtom, chainsAtom, mnemonicAtom, seedAtom } from '../../Atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

function GenerateMnemonic() {
  const setMnemonic = useSetRecoilState(mnemonicAtom);
  const setSeed = useSetRecoilState(seedAtom);
  const setAccounts = useSetRecoilState(accountsAtom);
  const setAccountIndex = useSetRecoilState(accountIndexAtom);
  const chains = useRecoilValue(chainsAtom);

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

  return (
    <>
      <button
        className='btn btn-outline btn-info btn-md my-4 w-max mx-auto uppercase'
        onClick={genMemonic}
      >
        Generate
      </button>
      <DisplayMnemonic />
    </>
  );
}

export default GenerateMnemonic;
