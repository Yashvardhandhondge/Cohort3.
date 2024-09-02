import { generateMnemonic } from "bip39";
import { useState } from "react";
import { SolanaWallet } from "./components/SolWallet";
// import { SolanaWallet } from "./components/solwallet2";
function  App(){
  const [mnemonic,setMnemonic]=useState('')

  return(
    <div>
      <button onClick={async function(){
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>Create Seed</button>
      <input type="text" value={mnemonic} />
      <SolanaWallet mnemonic={mnemonic} />
    </div>
  )
}
export default App