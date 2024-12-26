export default function Wallet({ wallet }) {
  return (
    <div className='border m-3'>
      <div>{wallet.address}</div>
      <div>{wallet.secretKey}</div>
    </div>
  );
}
