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
        <Link to={'/mnemonic'} className='btn glass md:btn-wide'>
          Generate new mnemonic
        </Link>
        <Link to={'/mnemonic/add'} className='btn glass md:btn-wide'>
          Add existing mnemonic
        </Link>
      </div>
      <Outlet context={[mnemonic, genMemonic, addMnemonic]} />
    </>
  );
}
