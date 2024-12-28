import { useOutletContext } from 'react-router';
import DisplayMnemonic from './DisplayMnemonic';

function GenerateMnemonic() {
  const [mnemonic, genMemonic, addMnemonic] = useOutletContext();

  return (
    <>
      <button
        className='btn btn-outline btn-info btn-md my-4 w-max mx-auto uppercase'
        onClick={genMemonic}
      >
        Generate
      </button>
      <DisplayMnemonic mnemonic={mnemonic} />
    </>
  );
}

export default GenerateMnemonic;
