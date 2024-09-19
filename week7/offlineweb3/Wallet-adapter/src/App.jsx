import React from "react";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider, WalletMultiButton, WalletDisconnectButton } from "@solana/wallet-adapter-react-ui";

import '@solana/wallet-adapter-react-ui/styles.css';
import { RequestAirdrop } from "./Requestairdrop";
import { Showbalance } from "./Showbalance";
import { SendToken } from "./Signatransaction";
import { Signmessage } from "./Signmessage";
function App(){
  return(
  <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
    <WalletModalProvider>

      <div style={{width:"100vw",display:"flex",justifyContent:'center'}}>
      </div>
      <WalletMultiButton />
    <RequestAirdrop/>
    <Showbalance />
    <SendToken />
    <Signmessage />
    </WalletModalProvider>

    </WalletProvider>
  </ConnectionProvider>
  )
}
export default App