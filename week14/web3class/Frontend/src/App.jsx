
import {PublicKey,Transaction,LAMPORTS_PER_SOL,Connection,SystemProgram} from '@solana/web3.js'
import axios from 'axios'


function App(){
  const pubkey =new PublicKey("8M3wPcWv1bT1W2vbqHZshUGqUTiShaqZR2Le2YoFYmEP")
const connection = new Connection("https://solana-devnet.g.alchemy.com/v2/DEhoo-faZJyJO03UWMXSsKycjKrK_w9G");
  async function sendSol(){
    const instruction = SystemProgram.transfer({
      fromPubkey:pubkey,
      toPubkey:new PublicKey("GN6bCnrnxHdg5HLyZxCPVEZ251nEJLX9eiqSSnrGNZfu"),
      lamports: 0.001*LAMPORTS_PER_SOL
    })
    const tx = new Transaction().add(instruction);
   
    const {blockhash} = await connection.getLatestBlockhash();
    tx.recentBlockhash = blockhash;
    tx.feePayer = pubkey;
    const serializedTx =tx.serialize({
      requireAllSignatures:false,
      verifySignatures:false
    });
    console.log(serializedTx);
    
   axios.post('http://localhost:3000/api/v1/txn/sign',{
    message:serializedTx,
    retry:false
   })
    
   }


  return <div>
    <input type="text" />
    <input type="text" />
    <button onClick={sendSol}>Submit</button>
  </div>
}

export default App;