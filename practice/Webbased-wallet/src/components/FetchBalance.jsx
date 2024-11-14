import { useState, useEffect } from 'react';
import { sendJsonRpcRequest } from '../utils/jsonRpc';

function FetchBalance() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);
  const [error, setError] = useState(null);

  const fetchBalance = async () => {
    try {
      setError(null);
      const result = await sendJsonRpcRequest(
        'https://eth-mainnet.g.alchemy.com/v2/Xy4Y5_8R2ks3ytY6JeL4az8I4Z6w5Hj5',
        'eth_getBalance',
        [address, 'latest']
      );
      const balanceInEth = parseFloat(result) / 1e18;
      setBalance(balanceInEth);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (address) {
      fetchBalance();
    }
  }, [address]);

  return (
    <div>
      <h2>Fetch Balance</h2>

      <div>
        <label htmlFor="address">Wallet Address</label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="0x..."
        />
      </div>

      <button onClick={fetchBalance}>Fetch Balance</button>

      {balance !== null && (
        <div>
          Balance: {balance.toFixed(4)} ETH
        </div>
      )}

      {error && (
        <div>
          Error: {error}
        </div>
      )}
    </div>
  );
}

export default FetchBalance;