import BitCoinSVG from './assets/svgs/BitCoinSVG';
import ClipBoardSVG from './assets/svgs/ClipBoardSVG';
import EthereumSVG from './assets/svgs/EthereumSVG';
import SolanaSVG from './assets/svgs/SolanaSVG';
import AddressSVG from './assets/svgs/AddressSVG';
import KeySVG from './assets/svgs/KeySVG';

export default function Wallet({ wallet, chain, chains }) {
  return (
    <div className='flex items-center border-l-8 rounded-md bg-base-300 border-accent my-3 mx-auto shadow-lg w-10/12'>
      <div className='px-4'>
        {chain === chains['bitcoin'] && <BitCoinSVG height={45} width={45} />}
        {chain === chains['solana'] && <SolanaSVG height={45} width={45} />}
        {chain === chains['ethereum'] && <EthereumSVG height={45} width={45} />}
      </div>
      <div className='flex flex-col justify-evenly h-fit mx-3 my-2 w-full'>
        <div className='flex gap-2 items-center bg-base-200 p-2 my-2'>
          <div>
            <AddressSVG />
          </div>
          <div>{wallet.address}</div>

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

        <div className='flex gap-2 items-center bg-base-200 p-2 my-2'>
          <div>
            <KeySVG />
          </div>
          <div>{wallet.secretKey}</div>

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
      </div>
    </div>
  );
}
