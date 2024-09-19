import {ed25519} from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";

export function Signmessage(){
    const {publicKey,signMessage} = useWallet();

    async function onClick() {
        if(!publicKey) throw new Error("Wallet not connected");
        if(!signMessage) throw new Error("Wallet does not suppport message");

        const message = document.getElementById("message").value;
        const encodedmessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedmessage);

        if(!ed25519.verify(signature,encodedmessage,publicKey.toBytes())) throw new Error("Message signature invalid");
        alert(`Success:Message signature : ${bs58.encode(signature)}`)
        
    }
    return(
        <div>
            <input type="text" id="message" placeholder="Message" />
            <button onClick={onClick}>Sign Message</button>
        </div>
    )
}