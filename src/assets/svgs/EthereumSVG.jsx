function EthereumSVG({ width, height }) {
  if (!width || !height) {
    width = 24;
    height = 24;
  }

  return (
    <svg
      role='img'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      id='Ethereum--Streamline-Simple-Icons'
      height={height}
      width={width}
    >
      <desc>Ethereum Streamline Icon: https://streamlinehq.com</desc>
      <title>Ethereum</title>
      <path
        d='M11.944 17.97 4.58 13.62 11.943 24l7.37 -10.38 -7.372 4.35h0.003zM12.056 0 4.69 12.223l7.365 4.354 7.365 -4.35L12.056 0z'
        fill='#ffffff'
        strokeWidth='1'
      ></path>
    </svg>
  );
}

export default EthereumSVG;
