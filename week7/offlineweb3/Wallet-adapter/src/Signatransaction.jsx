import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";

export function SendToken(){
    const wallet = useWallet();
    const {connection} = useConnection();

async function sendtoken(){
    let to = document.getElementById('to').value;
    let amount = document.getElementById('amount').value;
    const transactions = new Transaction;
    transactions.add(SystemProgram.transfer({
        fromPubkey:wallet.publicKey,
        toPubkey: new PublicKey(to),
        lamports : amount * LAMPORTS_PER_SOL,
    }));

    await wallet.sendTransaction(transactions,connection);
    alert("Sent"+amount + to)
}
return(
    <div>
        <input type="text" id="to" placeholder="to" />
        <input type="text" id="amount" placeholder="Amount" />
        <button onClick={sendtoken}>Send Token</button>
    </div>
)

}