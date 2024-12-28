import { Link, Outlet, useOutletContext } from 'react-router';
import DisplayMnemonic from './DisplayMnemonic';

export default function Mnemonic() {
  const [
    currentChainAccounts,
    mnemonic,
    chain,
    chains,
    genMemonic,
    createAddress,
    setChain,
    addMnemonic,
  ] = useOutletContext();

  return (
    <>
      <div className='flex justify-center gap-5'>
        <Link to={'/mnemonic'}>
          <button className='btn glass md:btn-wide' onClick={genMemonic}>
            Generate new mnemonic
          </button>
        </Link>
        <Link to={'/mnemonic/add'}>
          <button className='btn glass md:btn-wide'>Add existing mnemonic</button>
        </Link>
      </div>
      <Outlet context={[mnemonic, genMemonic, addMnemonic]} />
    </>
  );
}
