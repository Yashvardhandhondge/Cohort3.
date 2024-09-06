import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);

    const addWallet = async () => {
        try {
            const seed = await mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);

            setCurrentIndex(currentIndex + 1);
            setPublicKeys([...publicKeys, keypair.publicKey.toBase58()]);
        } catch (error) {
            console.error("Failed to generate wallet:", error);
        }
    };

    return (
        <div >
            <h2 >Solana Wallets</h2>
            <button
                onClick={addWallet}
            >
                Add Solana Wallet
            </button>

            <div >
                {publicKeys.length > 0 ? (
                    publicKeys.map((publicKey, index) => (
                        <div key={index} >
                            <p >Wallet {index + 1}:</p>
                            <p >{publicKey}</p>
                        </div>
                    ))
                ) : (
                    <p >No wallets added yet.</p>
                )}
            </div>
        </div>
    );
}