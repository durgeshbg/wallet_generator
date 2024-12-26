import Wallet from './Wallet';

export default function CurrentChainAddresses({currentChainAddresses}) {
  return (
    <>
      {currentChainAddresses.map((wallet) => (
        <Wallet key={wallet.address} wallet={wallet} />
      ))}
    </>
  );
}
