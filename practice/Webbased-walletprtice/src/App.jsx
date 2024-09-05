import { generateMnemonic } from "bip39";
import { useState } from "react";
import { Buffer } from 'buffer';
import { SolanaWallet } from "./components/solwallet";
globalThis.Buffer = Buffer;
function App(){
  const [mnemonic,setmnemonic] = useState('');
  return(
    <div>
      <button onClick={async function(){
        const mn = await generateMnemonic();
        setmnemonic(mn);
      }}>Create seed </button>
      <input type="text"  value={mnemonic} />
      <SolanaWallet mnemonic={mnemonic}></SolanaWallet>
    </div>
  )
}
export default App;