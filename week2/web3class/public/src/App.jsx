

import React, { useState } from "react";
import { ethers } from 'ethers';
import { HDNode } from "@ethersproject/hdnode";

const WalletGenerator = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [wallets, setWallets] = useState([]);

  const generateMnemonic = () => {
    try {
      const wallet = ethers.Wallet.createRandom();
      setMnemonic(wallet.mnemonic?.phrase || '');
    } catch (error) {
      console.log('Error generating mnemonic:', error);
    }
  }

  const addWallet = () => {
    if (!mnemonic) {
      alert('Please generate a mnemonic first');
      return;
    }

    try {
      const hdNode = HDNode.fromMnemonic(mnemonic);
      const path = `m/44'/60'/0'/0/${wallets.length}`;
      const derivedNode = hdNode.derivePath(path);
      const wallet = new ethers.Wallet(derivedNode.privateKey);
      setWallets([...wallets, wallet]);
    } catch (error) {
      console.log('Error adding wallet:', error);
    }
  }

  return (
    <div>
      <h1>Your Wallet</h1>
      <button onClick={generateMnemonic}>Generate Mnemonic</button>
      {mnemonic && <p>{mnemonic}</p>}
      <button onClick={addWallet}>Add Wallet</button>
      <div>
        {wallets.map((wallet, index) => (
          <div key={index}>
            <p>Wallet {index + 1}: {wallet.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WalletGenerator;