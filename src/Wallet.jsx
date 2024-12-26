export default function Wallet({ wallet }) {
  return (
    <div className='mx-3 my-1 text-white px-6 py-3 rounded-md border-4 border-purple-700 bg-purple-900 bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent'>
      <div className='gap-2 relative flex h-fit items-center justify-start rounded-lg bg-purple-900 bg-gradient-to-tl from-violet-800 via-violet-600 to-violet-400 px-3 py-2 font-semibold text-md my-3 w-3/4'>
        <div>Address:</div>
        <div>{wallet.address}</div>
        <button
          className='ml-auto rounded-md bg-white/30 px-1 py-0.5'
          onClick={() => {
            navigator.clipboard.writeText(wallet.address);
          }}
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='gap-2 relative flex h-fit items-center justify-start rounded-lg bg-purple-900 bg-gradient-to-tl from-violet-800 via-violet-600 to-violet-400 px-3 py-2 font-semibold text-md my-3 w-3/4'>
        <div>Secret:</div>
        <div>{wallet.secretKey}</div>
        <button
          className='ml-auto rounded-md bg-white/30 px-1 py-0.5'
          onClick={() => {
            navigator.clipboard.writeText(wallet.secretKey);
          }}
        >
          <svg
            className='w-6 h-6 text-gray-800 dark:text-white'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              fillRule='evenodd'
              d='M18 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1V9a4 4 0 0 0-4-4h-3a1.99 1.99 0 0 0-1 .267V5a2 2 0 0 1 2-2h7Z'
              clipRule='evenodd'
            />
            <path
              fillRule='evenodd'
              d='M8 7.054V11H4.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 8 7.054ZM10 7v4a2 2 0 0 1-2 2H4v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3Z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
