import { useEffect, useState } from 'react';
import EthereumSVG from '../../assets/svgs/EthereumSVG';
import { Network, Alchemy } from 'alchemy-sdk';
import { WeiPerEther } from 'ethers';

function EthereumAccountInfo({ account }) {
  const [balance, setBalance] = useState();
  const [latestBlock, setLatestBlock] = useState();
  const [estFeeRate, setEstFeeRate] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const settings = {
          apiKey: 'dTU4nfWu-hyYKKNtP5tggFsk0raZnp-M',
          network: Network.ETH_MAINNET,
        };
        const alchemy = new Alchemy(settings);

        alchemy.core.getBlockNumber().then((data) => setLatestBlock(data));
        alchemy.core.getGasPrice().then((data) => setEstFeeRate(data));
        alchemy.core.getBalance(account.address).then((data) => setBalance(data));
      } catch (error) {
        console.error(error);
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
            {balance ? parseInt(balance._hex, 16) / parseInt(WeiPerEther) : '0'}{' '}
            <span>
              <EthereumSVG />
            </span>
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Latest block:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {latestBlock ? latestBlock : '0'}{' '}
          </span>
        </div>
        <div className='flex items-baseline justify-between border-b-2 border-white/5 mt-5 flex-col gap-2'>
          <span className='font-thin text-xl'>Gas Fee:</span>
          <span className='flex font-bold gap-2 text-sm items-center'>
            {estFeeRate ? parseInt(estFeeRate._hex, 16) / parseInt(WeiPerEther) : '0'}
            {' GWEI'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default EthereumAccountInfo;
