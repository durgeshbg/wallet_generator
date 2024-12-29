import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Mnemonic from './Mnemonic.jsx';
import CurrentChainAccounts from './CurrentChainAccounts.jsx';
import AddMnemonic from './AddMnemonic.jsx';
import GenerateMnemonic from './GenerateMnemonic.jsx';
import Wallet from './Wallet.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>
);
