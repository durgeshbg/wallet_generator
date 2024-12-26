import { derivePath } from 'ed25519-hd-key';
import { BIP32Factory } from 'bip32';
import * as ecc from 'tiny-secp256k1';
import { HDNodeWallet } from 'ethers';
import { Keypair } from '@solana/web3.js';
import bs58 from 'bs58';
import bs58check from 'bs58check';

export function getDerivedPath(chains, currentChain, currentAccountIndex) {
  let derivationPath = `m/44'/${currentChain}'/${currentAccountIndex}'/0`;
  if (currentChain === chains['solana']) {
    derivationPath += "'";
  } else {
    derivationPath += `/${currentAccountIndex}`;
  }
  return derivationPath;
}

export function createWallet(mnemonic, derivationPath, seed, chain, chains) {
  if (chain === chains['solana']) {
    // create solana wallet
    const deriveSeed = derivePath(derivationPath, seed);
    const keyPair = Keypair.fromSeed(deriveSeed.key);
    return {
      address: keyPair.publicKey.toBase58(),
      secretKey: bs58.encode(keyPair.secretKey),
      walletChain: chain,
    };
  } else if (chain === chains['bitcoin']) {
    // create bitcoin wallet
    const bip32 = BIP32Factory(ecc);
    const node = bip32.fromSeed(Buffer.from(seed));
    const child = node.derivePath(derivationPath);
    return {
      address: bs58check.encode(child.publicKey),
      secretKey: child.toWIF(),
      walletChain: chain,
    };
  } else if (chain === chains['ethereum']) {
    // create ethereum wallet
    const wallet = HDNodeWallet.fromPhrase(mnemonic, derivationPath);
    return { address: wallet.address, secretKey: wallet.privateKey, walletChain: chain };
  }
}
