
import {ConnectionProvider,WalletProvider} from "@solana/wallet-adapter-react"
import {WalletModalProvider,WalletMultiButton,WalletDisconnectButton} from '@solana/wallet-adapter-react-ui'
import '@solana/wallet-adapter-react-ui/styles.css';
import { TokenLaunch } from "./components/Tokenlaunchpad";

function App() {


  return (
    <>
      <div className="bg-zinc-500 min-h-screen">
      <ConnectionProvider endpoint={"https://solana-mainnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G"}>
      <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
      <WalletMultiButton />
      
      <TokenLaunch />
        </WalletModalProvider>  
      </WalletProvider>
      </ConnectionProvider>
    </div>
  

    </>
  )
}

export default App
