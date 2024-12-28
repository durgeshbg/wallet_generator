function BitCoinSVG({ width, height }) {
  if (!width || !height) {
    width = 24;
    height = 24;
  }

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      id='Bitcoinsv--Streamline-Simple-Icons'
      height={height}
      width={width}
    >
      <desc>Bitcoinsv Streamline Icon: https://streamlinehq.com</desc>
      <title>Bitcoin SV</title>
      <path
        d='m14.648 14.423 0.003 -0.004a1.34 1.34 0 0 1 -0.498 0.659c-0.269 0.189 -0.647 0.338 -1.188 0.364l-1.99 0.004v-2.93c0.288 0.008 1.565 -0.013 2.119 0.015 0.722 0.035 1.171 0.321 1.41 0.668 0.262 0.351 0.293 0.82 0.144 1.224zm-2.129 -3.261c0.503 -0.024 0.852 -0.162 1.101 -0.336 0.214 -0.146 0.375 -0.367 0.46 -0.611 0.134 -0.375 0.107 -0.81 -0.136 -1.135 -0.223 -0.319 -0.638 -0.584 -1.306 -0.616 -0.495 -0.026 -1.413 -0.003 -1.664 -0.01v2.709c0.025 0.004 1.539 -0.001 1.545 -0.001zM24 12c0 6.627 -5.373 12 -12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.65 2.142c0.022 -1.477 -1.24 -2.332 -1.908 -2.572 0.715 -0.491 1.206 -1.043 1.206 -2.085 0 -1.655 -1.646 -2.43 -2.647 -2.529 -0.082 -0.009 -0.31 -0.013 -0.31 -0.013V5.361h-1.633l0.004 1.583H10.97V5.367H9.31v1.569c-0.292 0.007 -2.049 0.006 -2.049 0.006v1.401h0.571c0.601 0.016 0.822 0.362 0.798 0.677v6.041a0.408 0.408 0 0 1 -0.371 0.391c-0.249 0.011 -0.621 0 -0.621 0l-0.32 1.588h1.996v1.6h1.661v-1.591h1.091v1.594h1.624v-1.588c1.899 0.05 3.643 -1.071 3.66 -2.913z'
        fill='#ffffff'
        strokeWidth='1'
      ></path>
    </svg>
  );
}

export default BitCoinSVG;