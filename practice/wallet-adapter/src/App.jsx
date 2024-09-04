import React from "react";
import { ConnectionProvider,WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider,WalletMultiButton,WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";
import { Airdrop } from "./Airdrop";
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowBalnace } from "./ShowSolBalnace";
import { SignMessage } from "./SignMessage";
import { SendTokens } from "./SendTokens";
import { Buffer } from 'buffer';
globalThis.Buffer = Buffer;

function App(){
  return(
    <ConnectionProvider endpoint="https://solana-devnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G">
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
        <Airdrop></Airdrop>
        <SignMessage></SignMessage>
        <ShowBalnace></ShowBalnace>
        <SendTokens></SendTokens>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
export default App