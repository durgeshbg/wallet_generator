export default function ChainNav({ setChain, chains, chain, createAddress, mnemonic }) {
  return (
    <div className='flex flex-col fixed bottom-0 right-1/2 translate-x-1/2 z-10'>
      <div className='w-full flex text-white items-center justify-around x5 h-fit max-w-lg rounded-full backdrop-blur-sm bg-white/30 border-none mx-auto p-2'>
        <button
          className={
            chain === chains['bitcoin']
              ? 'rounded-md bg-slate-700 mx-10 p-4 py-2'
              : 'rounded-md hover:bg-slate-700 mx-10 p-4 py-2'
          }
          onClick={() => setChain(chains['bitcoin'])}
        >
          <div className='flex flex-col items-center gap-1'>
            <div>
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                id='Bitcoinsv--Streamline-Simple-Icons'
                height='24'
                width='24'
              >
                <desc>Bitcoinsv Streamline Icon: https://streamlinehq.com</desc>
                <title>Bitcoin SV</title>
                <path
                  d='m14.648 14.423 0.003 -0.004a1.34 1.34 0 0 1 -0.498 0.659c-0.269 0.189 -0.647 0.338 -1.188 0.364l-1.99 0.004v-2.93c0.288 0.008 1.565 -0.013 2.119 0.015 0.722 0.035 1.171 0.321 1.41 0.668 0.262 0.351 0.293 0.82 0.144 1.224zm-2.129 -3.261c0.503 -0.024 0.852 -0.162 1.101 -0.336 0.214 -0.146 0.375 -0.367 0.46 -0.611 0.134 -0.375 0.107 -0.81 -0.136 -1.135 -0.223 -0.319 -0.638 -0.584 -1.306 -0.616 -0.495 -0.026 -1.413 -0.003 -1.664 -0.01v2.709c0.025 0.004 1.539 -0.001 1.545 -0.001zM24 12c0 6.627 -5.373 12 -12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.65 2.142c0.022 -1.477 -1.24 -2.332 -1.908 -2.572 0.715 -0.491 1.206 -1.043 1.206 -2.085 0 -1.655 -1.646 -2.43 -2.647 -2.529 -0.082 -0.009 -0.31 -0.013 -0.31 -0.013V5.361h-1.633l0.004 1.583H10.97V5.367H9.31v1.569c-0.292 0.007 -2.049 0.006 -2.049 0.006v1.401h0.571c0.601 0.016 0.822 0.362 0.798 0.677v6.041a0.408 0.408 0 0 1 -0.371 0.391c-0.249 0.011 -0.621 0 -0.621 0l-0.32 1.588h1.996v1.6h1.661v-1.591h1.091v1.594h1.624v-1.588c1.899 0.05 3.643 -1.071 3.66 -2.913z'
                  fill='#ffffff'
                  strokeWidth='1'
                ></path>
              </svg>
            </div>
            <div>Bitcoin</div>
          </div>
        </button>
        <button
          className={
            chain === chains['solana']
              ? 'rounded-md bg-slate-700 mx-10 p-4 py-2'
              : 'rounded-md hover:bg-slate-700 mx-10 p-4 py-2'
          }
          onClick={() => setChain(chains['solana'])}
        >
          <div className='flex flex-col items-center gap-1'>
            <div>
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                id='Solana--Streamline-Simple-Icons'
                height='24'
                width='24'
              >
                <desc>Solana Streamline Icon: https://streamlinehq.com</desc>
                <title>Solana</title>
                <path
                  d='m23.8764 18.0313 -3.962 4.1393a0.9201 0.9201 0 0 1 -0.306 0.2106 0.9407 0.9407 0 0 1 -0.367 0.0742H0.4599a0.4689 0.4689 0 0 1 -0.2522 -0.0733 0.4513 0.4513 0 0 1 -0.1696 -0.1962 0.4375 0.4375 0 0 1 -0.0314 -0.2545 0.4438 0.4438 0 0 1 0.117 -0.2298l3.9649 -4.1393a0.92 0.92 0 0 1 0.3052 -0.2102 0.9407 0.9407 0 0 1 0.3658 -0.0746H23.54a0.4692 0.4692 0 0 1 0.2523 0.0734 0.4531 0.4531 0 0 1 0.1697 0.196 0.438 0.438 0 0 1 0.0313 0.2547 0.4442 0.4442 0 0 1 -0.1169 0.2297zm-3.962 -8.3355a0.9202 0.9202 0 0 0 -0.306 -0.2106 0.941 0.941 0 0 0 -0.367 -0.0742H0.4599a0.4687 0.4687 0 0 0 -0.2522 0.0734 0.4513 0.4513 0 0 0 -0.1696 0.1961 0.4376 0.4376 0 0 0 -0.0314 0.2546 0.444 0.444 0 0 0 0.117 0.2297l3.9649 4.1394a0.9204 0.9204 0 0 0 0.3052 0.2102c0.1154 0.049 0.24 0.0744 0.3658 0.0746H23.54a0.469 0.469 0 0 0 0.2523 -0.0734 0.453 0.453 0 0 0 0.1697 -0.1961 0.4382 0.4382 0 0 0 0.0313 -0.2546 0.4444 0.4444 0 0 0 -0.1169 -0.2297zM0.46 6.7225h18.7815a0.9411 0.9411 0 0 0 0.367 -0.0742 0.9202 0.9202 0 0 0 0.306 -0.2106l3.962 -4.1394a0.4442 0.4442 0 0 0 0.117 -0.2297 0.4378 0.4378 0 0 0 -0.0314 -0.2546 0.453 0.453 0 0 0 -0.1697 -0.196 0.469 0.469 0 0 0 -0.2523 -0.0734H4.7596a0.941 0.941 0 0 0 -0.3658 0.0745 0.9203 0.9203 0 0 0 -0.3052 0.2102L0.1246 5.9687a0.4438 0.4438 0 0 0 -0.1169 0.2295 0.4375 0.4375 0 0 0 0.0312 0.2544 0.4512 0.4512 0 0 0 0.1692 0.196 0.4689 0.4689 0 0 0 0.2518 0.0739z'
                  fill='#ffffff'
                  strokeWidth='1'
                ></path>
              </svg>
            </div>
            <div>Solona</div>
          </div>
        </button>
        <button
          className={
            chain === chains['ethereum']
              ? 'rounded-md bg-slate-700 mx-10 p-4 py-2'
              : 'rounded-md hover:bg-slate-700 mx-10 p-4 py-2'
          }
          onClick={() => setChain(chains['ethereum'])}
        >
          <div className='flex flex-col items-center gap-1'>
            <div>
              <svg
                role='img'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                id='Ethereum--Streamline-Simple-Icons'
                height='24'
                width='24'
              >
                <desc>Ethereum Streamline Icon: https://streamlinehq.com</desc>
                <title>Ethereum</title>
                <path
                  d='M11.944 17.97 4.58 13.62 11.943 24l7.37 -10.38 -7.372 4.35h0.003zM12.056 0 4.69 12.223l7.365 4.354 7.365 -4.35L12.056 0z'
                  fill='#ffffff'
                  strokeWidth='1'
                ></path>
              </svg>
            </div>
            <div>Ethereum</div>
          </div>
        </button>

        {mnemonic && (
          <button
            className='rounded-full bg-slate-700 mx-10 py-2 px-6'
            onClick={createAddress}
          >
            <div className='flex items-center gap-2'>
              <div>
                <svg
                  fill='#ffffff'
                  version='1.1'
                  id='Capa_1'
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 45.402 45.402'
                  strokeWidth={2}
                >
                  <g>
                    <path
                      d='M41.267,18.557H26.832V4.134C26.832,1.851,24.99,0,22.707,0c-2.283,0-4.124,1.851-4.124,4.135v14.432H4.141
		c-2.283,0-4.139,1.851-4.138,4.135c-0.001,1.141,0.46,2.187,1.207,2.934c0.748,0.749,1.78,1.222,2.92,1.222h14.453V41.27
		c0,1.142,0.453,2.176,1.201,2.922c0.748,0.748,1.777,1.211,2.919,1.211c2.282,0,4.129-1.851,4.129-4.133V26.857h14.435
		c2.283,0,4.134-1.867,4.133-4.15C45.399,20.425,43.548,18.557,41.267,18.557z'
                    />
                  </g>
                </svg>
              </div>
              <div className='text-white'>Create Address</div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
