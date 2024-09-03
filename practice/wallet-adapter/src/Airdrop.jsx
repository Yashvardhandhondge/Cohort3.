import { useWallet } from "@solana/wallet-adapter-react";
import { useConnection } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
export  function Airdrop(){
 const wallet = useWallet();
 const {connection} =useConnection();

 async function requestairdrop() {
    let amount = document.getElementById("amount").value
    await connection.requestAirdrop(wallet.publicKey,amount*LAMPORTS_PER_SOL)
    alert("airdroppped"+amount+"sol to"+wallet.publicKey.toBase58());
 }
 return <div>
    <br />
    <input type="text" id="amount" placeholder="amount" />
    <button onClick={requestairdrop}>requestAirdrop</button>
 </div>
}
