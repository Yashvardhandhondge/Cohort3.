import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair,Connection,clusterApiUrl,PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";