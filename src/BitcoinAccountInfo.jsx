import BitCoinSVG from './assets/svgs/BitCoinSVG';

function BitcoinAccountInfo({ account }) {
  let balance;
  return (
    <div>
      <h2 className='text-md font-bold my-10 text-3xl border-2 shadow-lg border-accent w-max mx-auto py-2 px-4 rounded-md'>
        {account.address}
      </h2>
      <div className=' px-3 mx-auto w-6/12 mt-24'>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5'>
          <span className='font-thin text-xl'>Current balance:</span>
          <span className='flex font-bold gap-2 text-2xl items-center'>
            {balance ? balance : '0'}{' '}
            <span>
              <BitCoinSVG />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BitcoinAccountInfo;
