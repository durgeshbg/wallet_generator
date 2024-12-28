import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import Mnemonic from './Mnemonic.jsx';
import CurrentChainAccounts from './CurrentChainAccounts.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Mnemonic />} />
          <Route path='mnemonic' element={<Mnemonic />} />
          {/* <Route path='create' element={<CreateMnemonic} /> */}
          {/* <Route path='add' element={<AddMnemonic} /> */}
          {/* </Route> */}
          <Route path='accounts' element={<CurrentChainAccounts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
