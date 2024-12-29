import { useEffect, useState } from 'react';
import BitCoinSVG from './assets/svgs/BitCoinSVG';
import axios from 'axios';

function BitcoinAccountInfo({ account }) {
  const [estFeeRate, setEstFeeRate] = useState();
  const [bestblockhash, setBestblockhash] = useState();
  const [blockcount, setBlockcount] = useState();
  const [memoryinfo, setMemoryinfo] = useState();

  async function feeRate() {
    try {
      const res = await axios.post(
        'https://black-sleek-wave.btc-testnet.quiknode.pro/27214bb2e060c3b31078f04ac581f30623d7670d/',
        {
          method: 'estimatesmartfee',
          params: [30],
        }
      );
      if (res.data.error) throw Error(res.data.error);
      else setEstFeeRate(res.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBestBlock() {
    try {
      const res = await axios.post(
        'https://black-sleek-wave.btc-testnet.quiknode.pro/27214bb2e060c3b31078f04ac581f30623d7670d/',
        {
          method: 'getbestblockhash',
        }
      );
      if (res.data.error) throw Error(res.data.error);
      else setBestblockhash(res.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchBlockcount() {
    try {
      const res = await axios.post(
        'https://black-sleek-wave.btc-testnet.quiknode.pro/27214bb2e060c3b31078f04ac581f30623d7670d/',
        {
          method: 'getblockcount',
        }
      );
      if (res.data.error) throw Error(res.data.error);
      else setBlockcount(res.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchMemoryinfo() {
    try {
      const res = await axios.post(
        'https://black-sleek-wave.btc-testnet.quiknode.pro/27214bb2e060c3b31078f04ac581f30623d7670d/',
        {
          method: 'getmemoryinfo',
        }
      );
      if (res.data.error) throw Error(res.data.error);
      else setMemoryinfo(res.data.result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    feeRate();
    fetchBestBlock();
    fetchBlockcount();
    fetchMemoryinfo();
  }, [account]);

  return (
    <div className='w-full'>
      <h2 className='text-md font-bold my-10 text-xl border-2 shadow-lg border-accent w-max mx-auto py-2 px-4 rounded-md'>
        {account.address}
      </h2>
      <div className=' px-3 mx-auto w-6/12 mt-24'>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Estimated Fee Rate:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {estFeeRate ? estFeeRate.feerate : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>
            No. of confirmation blocks for the above fee rate:
          </span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {estFeeRate ? estFeeRate.blocks : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Best Block:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {bestblockhash ? bestblockhash : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Height of current best block:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {blockcount ? blockcount : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Memory Info (locked):</span>
          <span className='flex flex-col font-bold gap-2 text-sm items-start'>
            <div>
              <span className='font-thin'>Free:</span>{' '}
              <span>{memoryinfo ? memoryinfo.locked.free : '0'} bytes</span>
            </div>
            <div>
              <span className='font-thin'>Used:</span>{' '}
              <span>{memoryinfo ? memoryinfo.locked.used : '0'} bytes</span>
            </div>
            <div>
              <span className='font-thin'>Total:</span>{' '}
              <span>{memoryinfo ? memoryinfo.locked.total : '0'} bytes</span>
            </div>
            <div>
              <span className='font-thin'>Locked:</span>{' '}
              <span>{memoryinfo ? memoryinfo.locked.locked : '0'} bytes</span>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BitcoinAccountInfo;
