export async function sendJsonRpcRequest(url, method, params) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method,
        params,
        id: 1,
      }),
    });
  
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }
  
    return data.result;
  }
  