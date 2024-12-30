import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Mnemonic from './components/Mnemonic/Mnemonic.jsx';
import CurrentChainAccounts from './components/Accounts/CurrentChainAccounts.jsx';
import AddMnemonic from './components/Mnemonic/AddMnemonic.jsx';
import GenerateMnemonic from './components/Mnemonic/GenerateMnemonic.jsx';
import Wallet from './components/Accounts/Wallet.jsx';
import { RecoilRoot } from 'recoil';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route path='/' element={<Mnemonic />}>
              <Route index element={<GenerateMnemonic />} />
              <Route path='add' element={<AddMnemonic />} />
            </Route>
            <Route path='accounts' element={<CurrentChainAccounts />} />
            <Route path='accounts/:id' element={<Wallet />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
