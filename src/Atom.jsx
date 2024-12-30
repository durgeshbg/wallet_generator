import { atom, selector } from 'recoil';

export const mnemonicAtom = atom({
  key: 'mnemonic',
  default: '',
});

export const seedAtom = atom({
  key: 'seed',
  default: '',
});

export const chainsAtom = atom({
  key: 'chains',
  default: {
    bitcoin: 0,
    ethereum: 60,
    solana: 501,
  },
});

export const chainAtom = atom({
  key: 'chain',
  default: selector({
    key: 'chainSelector',
    get: ({ get }) => {
      return get(chainsAtom)['solana'];
    },
  }),
});

export const accountIndexAtom = atom({
  key: 'accountIndex',
  default: selector({
    key: 'accountIndexSelector',
    get: ({ get }) => {
      const chains = get(chainsAtom);
      return {
        [chains['bitcoin']]: 0,
        [chains['ethereum']]: 0,
        [chains['solana']]: 0,
      };
    },
  }),
});

export const accountsAtom = atom({
  key: 'accounts',
  default: [],
});

export const currentChainAccountsSelector = selector({
  key: 'currentChainAccounts',
  get: ({ get }) => {
    return get(accountsAtom).filter((acc) => acc.walletChain === get(chainAtom));
  },
});
