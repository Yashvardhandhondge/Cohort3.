import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair,Connection,clusterApiUrl } from "@solana/web3.js";

export function SolanaWallet({mnemonic}){
    const [currentIndex,setCurrentIndex]= useState(0);
    const [wallet,setWallets]=useState([]);
    async function getbalance(publicKey){
        const connection = new Connection(clusterApiUrl("devnet"),"confirmed");
        const balance = await connection.getBalance(publicKey);
        return balance/1e9;

    }
    async function generatewallet(){
        const seed = await mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedseed = derivePath(path,seed.toString('hex')).key
        const secrete = nacl.sign.keyPair.fromSeed(derivedseed).secretKey
        const keypair = Keypair.fromSeed(secrete);
        const balance = getbalance(keypair.publicKey);
        setWallets([...wallet,{publicKey:keypair.publicKey,balance}]);
        setCurrentIndex(currentIndex+1);
    }
    return(
        <div>
            <button onClick={generatewallet}>sol wallet</button>
            {wallet.map((wallet,index)=>(
                <div key={index}>
                    <p>Public key :{wallet.publicKey.toBase58()}</p>
                    <p>Balnace:{wallet.balance}</p>
                </div>
            ))}
        </div>
    )
}