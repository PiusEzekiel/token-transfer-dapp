const contractAddress = "0x3645884591E4aa1BBEfF10C247883E99B0691F57";
const abi = [
  // Minimal ABI for transfer and balanceOf
  "function balanceOf(address) view returns (uint256)",
  "function transfer(address to, uint amount) returns (bool)"
];

let provider, signer, contract;

document.getElementById("connectBtn").onclick = async () => {
  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, abi, signer);

    const account = await signer.getAddress();
    document.getElementById("account").innerText = account;

    const balance = await contract.balanceOf(account);
    document.getElementById("balance").innerText = ethers.utils.formatUnits(balance, 18);
  } else {
    alert("MetaMask not detected");
  }
};

document.getElementById("transferBtn").onclick = async () => {
  const to = document.getElementById("toAddress").value;
  const amount = document.getElementById("amount").value;

  try {
    const tx = await contract.transfer(to, ethers.utils.parseUnits(amount, 18));
    document.getElementById("status").innerText = "Sending Transaction...";
    await tx.wait();
    document.getElementById("status").innerText = "✅ Transaction confirmed!";
    // ✅ Refresh balance
    const account = await signer.getAddress();
    const balance = await contract.balanceOf(account);
    document.getElementById("balance").innerText = ethers.utils.formatUnits(balance, 18);

  } catch (err) {
    console.error(err);
    document.getElementById("status").innerText = "❌ Transaction failed.";
  }
};
