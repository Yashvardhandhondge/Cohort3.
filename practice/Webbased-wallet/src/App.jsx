<<<<<<< HEAD
import { generateMnemonic } from "bip39";
import { useState } from "react";
import { SolanaWallet } from "./components/SolWallet";
// import { SolanaWallet } from "./components/solwallet2";
function  App(){
  const [mnemonic,setMnemonic]=useState('')
=======
import { generateMnemonic } from "bip39";// genretesmnemonic is a function from bip39 that allows to generatemnemonic 

import {Buffer} from 'buffer';
import { useState } from "react";

window.Buffer = window.Buffer || Buffer//buffer are local storage of browser

function App(){
  const [mnemonic,setMnemonic]=useState('');//defined a variable named mnemonic to store mnemonic phrase
>>>>>>> e8b9f6ea4138c0f04fb692e44d108874345379b2

  return(
    <div>
      <button onClick={async function(){
<<<<<<< HEAD
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>Create Seed</button>
      <input type="text" value={mnemonic} />
      <SolanaWallet mnemonic={mnemonic} />
    </div>
  )
}
export default App
=======
        const mn = await generateMnemonic();//just a generatemnemonic function to genratemnemonic 
        setMnemonic(mn)// and set mnemonic set genrated menonomic
      }}>Create seed phrase</button>
      <input type="text" value={mnemonic} />//an input box to disply mnemonic
    </div>
  )
}

export default App
>>>>>>> e8b9f6ea4138c0f04fb692e44d108874345379b2
