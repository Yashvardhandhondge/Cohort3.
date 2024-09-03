import React from "react";
import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider,WalletMultiButton,WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { Airdrop } from "./Airdrop";
import '@solana/wallet-adapter-react-ui/styles.css';

function App(){
  return(
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
        </WalletModalProvider>
        <Airdrop></Airdrop>
      </WalletProvider>
    </ConnectionProvider>
  )
}
export default App