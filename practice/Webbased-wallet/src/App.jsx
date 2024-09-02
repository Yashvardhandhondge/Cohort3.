import { generateMnemonic } from "bip39";// genretesmnemonic is a function from bip39 that allows to generatemnemonic 

import {Buffer} from 'buffer';
import { useState } from "react";

window.Buffer = window.Buffer || Buffer//buffer are local storage of browser

function App(){
  const [mnemonic,setMnemonic]=useState('');//defined a variable named mnemonic to store mnemonic phrase

  return(
    <div>
      <button onClick={async function(){
        const mn = await generateMnemonic();//just a generatemnemonic function to genratemnemonic 
        setMnemonic(mn)// and set mnemonic set genrated menonomic
      }}>Create seed phrase</button>
      <input type="text" value={mnemonic} />//an input box to disply mnemonic
    </div>
  )
}

export default App
