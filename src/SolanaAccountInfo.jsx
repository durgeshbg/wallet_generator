import { useEffect, useState } from 'react';
import SolanaSVG from './assets/svgs/SolanaSVG';
import { Connection, LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

function SolanaAccountInfo({ account }) {
  const [balance, setBalance] = useState();
  const [latestBlockhash, setLatestBlockhash] = useState();
  const [inflationRate, setInflationRate] = useState();

  useEffect(() => {
    async function fetchData() {
      const rpc =
        'https://solana-mainnet.g.alchemy.com/v2/dTU4nfWu-hyYKKNtP5tggFsk0raZnp-M';
      const conn = new Connection(rpc, 'confirmed');
      const publicKey = new PublicKey(account.address);
      try {
        const dataBalance = await conn.getBalance(publicKey, 10);
        setBalance(dataBalance / LAMPORTS_PER_SOL);
        const dataLatestBlockhash = await conn.getLatestBlockhash();
        setLatestBlockhash(dataLatestBlockhash);
        const dataInflationRate = await conn.getInflationRate();
        setInflationRate(dataInflationRate);
      } catch (error) {
        console.error('Error fetching account info:', error);
      }
    }

    fetchData();
  }, [account]);

  return (
    <div className='w-full'>
      <h2 className='text-md font-bold my-10 text-xl border-2 shadow-lg border-accent w-max mx-auto py-2 px-4 rounded-md'>
        {account.address}
      </h2>
      <div className=' px-3 mx-auto w-6/12 mt-24'>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Current balance:</span>
          <span className='flex font-bold gap-2 text-2xl items-center'>
            {balance ? JSON.stringify(balance) : '0'}{' '}
            <span>
              <SolanaSVG />
            </span>
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Latest Hash:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {latestBlockhash ? latestBlockhash.blockhash : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Last Valid Block Height:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {latestBlockhash ? latestBlockhash.lastValidBlockHeight : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Inflation Rate:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {inflationRate ? JSON.stringify(inflationRate.total) : '0'}{' '}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SolanaAccountInfo;
