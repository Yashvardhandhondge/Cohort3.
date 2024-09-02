import { generateMnemonic } from "bip39";

import {Buffer} from 'buffer';
import { useState } from "react";

window.Buffer = window.Buffer || Buffer

function App(){
  const [mnemonic,setMnemonic]=useState('');

  return(
    <div>
      <button onClick={async function(){
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>Create seed phrase</button>
      <input type="text" value={mnemonic} />
    </div>
  )
}

export default App