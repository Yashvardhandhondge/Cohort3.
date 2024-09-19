import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export function Showbalance(){
    const wallet = useWallet();
    const {connection} = useConnection();
    async function getmeuserbalance(){
        const balance = await connection.getBalance(wallet.publicKey);
        document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL;
    }
    getmeuserbalance();
    return <div>
         Balanace : <span id="balance"></span> Sol
    </div>
}