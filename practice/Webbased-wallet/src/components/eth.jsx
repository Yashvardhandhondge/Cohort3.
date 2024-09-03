import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet,utils } from "ethers";

export const EthWallet = ({mnemonic})=>{
    const [currentIndex,setCurrentIndex]=useState(0);
    const [address,setAddresses]= useState([]);
    return(
        <div>
            <button onClick={async function(){
               const seed = await mnemonicToSeed(mnemonic);
               const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
                const hdNode = utils.HDNode.fromSeed(seed);
                const child = hdNode.derivePath(derivationPath);
                const privateKey = child.privateKey;
                const wallet = new Wallet(privateKey);
                setCurrentIndex(currentIndex+1);
                setAddresses([...address,wallet.address])
            }}>Add Eth Wallet</button>
            {address.map(p=><div>Eth -{p}</div>)}

        </div>
    )
}