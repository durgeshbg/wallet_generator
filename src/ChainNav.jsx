export default function ChainNav({ setChain, chains }) {
  return (
    <div className='flex flex-col'>
      <h2 className='text-center text-2xl'>Chains</h2>
      <div className='mx-auto'>
        <button
          className='rounded bg-red-400 mx-10 p-4 py-2'
          onClick={() => setChain(chains['bitcoin'])}
        >
          Bitcoin
        </button>
        <button
          className='rounded bg-red-400 mx-10 p-4 py-2'
          onClick={() => setChain(chains['solana'])}
        >
          Solona
        </button>
        <button
          className='rounded bg-red-400 mx-10 p-4 py-2'
          onClick={() => setChain(chains['ethereum'])}
        >
          Ethereum
        </button>
      </div>
    </div>
  );
}
