import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (

    <ConnectionProvider endpoint={endpoint}>
    <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
    <div>
    hi there 
    </div>
    </WalletModalProvider>
    </WalletProvider>
    /</ConnectionProvider>
  )
}

export default App
