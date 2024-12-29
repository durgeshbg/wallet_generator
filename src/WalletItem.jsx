import BitCoinSVG from './assets/svgs/BitCoinSVG';
import ClipBoardSVG from './assets/svgs/ClipBoardSVG';
import EthereumSVG from './assets/svgs/EthereumSVG';
import SolanaSVG from './assets/svgs/SolanaSVG';
import AddressSVG from './assets/svgs/AddressSVG';
import InfoSVG from './assets/svgs/InfoSVG';
import KeySVG from './assets/svgs/KeySVG';
import { Link } from 'react-router';

export default function WalletItem({ wallet, chain, chains }) {
  return (
    <div className='flex flex-col md:flex-row p-2 items-center border-l-8 rounded-md bg-base-300 border-accent my-3 mx-auto shadow-lg w-9/12'>
      <div className='px-4'>
        {chain === chains['bitcoin'] && <BitCoinSVG height={45} width={45} />}
        {chain === chains['solana'] && <SolanaSVG height={45} width={45} />}
        {chain === chains['ethereum'] && <EthereumSVG height={45} width={45} />}
      </div>
      <div className='flex flex-col justify-evenly h-fit mx-3 my-2 w-full'>
        <div className='flex gap-2 items-center bg-base-200 p-2 my-2 w-11/12'>
          <div className='border-r-2 pr-2'>
            <AddressSVG />
          </div>
          <div className='overflow-scroll'>{wallet.address}</div>

          <div className='tooltip tooltip-left tooltip-accent ml-auto' data-tip='copy'>
            <button
              onClick={() => {
                navigator.clipboard.writeText(wallet.address);
              }}
              className='btn btn-square btn-sm btn-neutral'
            >
              <ClipBoardSVG />
            </button>
          </div>
        </div>

        <div className='flex gap-2 items-center bg-base-200 p-2 my-2 w-11/12'>
          <div className='border-r-2 pr-2'>
            <KeySVG />
          </div>
          <div className='overflow-scroll'>{wallet.secretKey}</div>

          <div className='tooltip tooltip-left tooltip-accent ml-auto' data-tip='copy'>
            <button
              onClick={() => {
                navigator.clipboard.writeText(wallet.secretKey);
              }}
              className='btn btn-square btn-sm btn-neutral'
            >
              <ClipBoardSVG />
            </button>
          </div>
        </div>
        <Link to={'/accounts/' + wallet.address} className='ml-auto'>
          <InfoSVG />
        </Link>
      </div>
    </div>
  );
}
