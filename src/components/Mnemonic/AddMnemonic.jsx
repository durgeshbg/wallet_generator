import DisplayMnemonic from './DisplayMnemonic';
import { useState } from 'react';
import MnemonicForm from './MnemonicForm';
import { mnemonicToSeedSync, validateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { accountIndexSelector, accountsAtom, chainsAtom, mnemonicAtom, seedAtom } from '../../Atom';

function AddMnemonic() {
  const [userMnemonic, setUserMnemonic] = useState();
  const [displayForm, setDisplayForm] = useState(true);
  const [error, setError] = useState();

  const setMnemonic = useSetRecoilState(mnemonicAtom);
  const setSeed = useSetRecoilState(seedAtom);
  const setAccounts = useSetRecoilState(accountsAtom);
  const setAccountIndex = useSetRecoilState(accountIndexSelector);
  const chains = useRecoilValue(chainsAtom);

  function addMnemonic(userMnemonic) {
    const result = validateMnemonic(userMnemonic, wordlist);
    if (result) {
      setMnemonic(userMnemonic);
      setSeed(mnemonicToSeedSync(userMnemonic));
      setAccounts([]);
      setAccountIndex({
        [chains['bitcoin']]: 0,
        [chains['ethereum']]: 0,
        [chains['solana']]: 0,
      });
    }
    return result;
  }

  function validateUserMnemonic() {
    const res = addMnemonic(userMnemonic);
    if (res) {
      setDisplayForm(false);
      setError(false);
    } else {
      setDisplayForm(true);
      setError(true);
    }
  }

  return (
    <>
      <div className='my-4 mx-auto'>
        <button
          className='btn btn-outline btn-info btn-md mx-5 w-max uppercase'
          onClick={() => {
            setDisplayForm(true);
          }}
        >
          Add
        </button>
        <button
          className='btn btn-outline btn-info btn-md mx-5 w-max uppercase'
          onClick={validateUserMnemonic}
        >
          Validate
        </button>
      </div>

      {displayForm ? <MnemonicForm setUserMnemonic={setUserMnemonic} /> : <DisplayMnemonic />}
      {error && (
        <div role='alert' className='alert alert-error mx-auto my-10 w-max'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 shrink-0 stroke-current'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>Error! Invalid mnemonic.</span>
        </div>
      )}
    </>
  );
}

export default AddMnemonic;
