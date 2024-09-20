import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { MINT_SIZE, TOKEN_PROGRAM_ID, createInitializeMint2Instruction, createMint, getMinimumBalanceForRentExemptMint } from "@solana/spl-token"

export function TokenLaunchpad() {
    const { connection } = useConnection();
    const wallet = useWallet();

    async function createToken() {
        const mintKeypair = Keypair.generate();
        const lamports = await getMinimumBalanceForRentExemptMint(connection);

        const transaction = new Transaction().add(
            SystemProgram.createAccount({
                fromPubkey: wallet.publicKey,
                newAccountPubkey: mintKeypair.publicKey,
                space: MINT_SIZE,
                lamports,
                programId: TOKEN_PROGRAM_ID,
            }),
            createInitializeMint2Instruction(mintKeypair.publicKey, 9, wallet.publicKey, wallet.publicKey, TOKEN_PROGRAM_ID)
        );
            
        transaction.feePayer = wallet.publicKey;
        transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
        transaction.partialSign(mintKeypair);

        await wallet.sendTransaction(transaction, connection);
        console.log(`Token mint created at ${mintKeypair.publicKey.toBase58()}`);
    }
    return(
   <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-center text-2xl font-bold mb-6">Solana Token Launchpad</h1>
      
      <div className="flex flex-col space-y-4">
        <input type="text"
         placeholder="Name"
         className="bg-zinc-200 text-black border border-black px-4 py-2 rounded-md placeholder:to-black"
        />
          <input type="text"
         placeholder="Symbol"
         className="bg-zinc-200 text-black border border-black px-4 py-2 rounded-md placeholder:to-black"
        />
          <input type="text"
         placeholder="Image URL"
         className="bg-zinc-200 text-black border border-black px-4 py-2 rounded-md placeholder:to-black"
        />
          <input type="text"
         placeholder="Initial Supply"
         className="bg-zinc-200 text-black border border-black px-4 py-2 rounded-md placeholder:to-black"
        />
        <button
         onClick={craetetoken}
         className="bg-black text-white py-2 rounded-md hover:bg-zinc-700 transition-all"
        >
            Craete Token
        </button>
      </div>
    </div>

   </div> 
    )
}