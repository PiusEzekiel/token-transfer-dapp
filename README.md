# 🚀 Token Transfer DApp

## Ethereum-based ERC-20 Token Transfer Application

### Overview
This DApp allows users to **connect their Ethereum wallet**, view token balances, and **transfer ERC-20 tokens** securely on the **Sepolia testnet** using a clean, modern UI. Built using Solidity, Ethers.js, and Hardhat, the app demonstrates seamless blockchain interaction and a highly responsive frontend.

---

## 🎯 Features
- 🔗 Connect MetaMask wallet and auto-detect account changes  
- 💰 View live ERC-20 token balance  
- 💸 Transfer tokens to any valid Ethereum address  
- 🧾 Save and display transaction history locally  
- 📋 Copy wallet address directly from the button  
- 📱 Responsive, animated, and accessible user interface  

---

## ⚙️ Tech Stack

| Layer              | Technology        |
|--------------------|------------------|
| **Blockchain**     | Ethereum (Sepolia)|
| **Smart Contract** | Solidity (ERC-20) |
| **Dev Framework**  | Hardhat           |
| **Frontend**       | HTML, CSS, JS     |
| **Wallet Support** | MetaMask          |
| **Web3 Library**   | Ethers.js         |
| **Hosting**        | Render            |

---

## 🌐 Live Deployment

- **Smart Contract:** `0x3645884591E4aa1BBEfF10C247883E99B0691F57`  
- **Frontend:** [https://token-transfer-dapp.onrender.com](https://token-transfer-dapp.onrender.com)

---

## 📸 Screenshots

> Include the following images in `/screenshots/` folder and reference them below

- Frontend UI with wallet connected and initiating a transaction  
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 135551.png" width="750" height="500" alt="Image Description">
</div>
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 135551.png" width="750" height="500" alt="Image Description">
</div>

- Successful token transfer with confirmation  
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 135858.png" width="750" height="500" alt="Image Description">
</div>

- Terminal showing contract deployment output  
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 115110_deploy.png" width="750" height="300" alt="Image Description">
</div>
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 115438_deployed.png" width="750" height="200" alt="Image Description">
</div>

- Successful test 
<span style="margin-bottom: 50px;">&nbsp;</span>
<div style="display: inlign-flex; align-items: center">
    <img src="/demo/Screenshot 2025-03-21 115403_test.png" width="750" height="250" alt="Image Description">
</div>

---

## 🧪 Test Instructions

### 1️⃣ Run Unit Tests

```bash
npx hardhat test
```

This will confirm that the contract correctly transfers tokens and updates balances.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/token-transfer-dapp.git
cd token-transfer-dapp
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add `.env` Configuration

Create a `.env` file in the root with the following:

```env
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
PRIVATE_KEY=YOUR_METAMASK_PRIVATE_KEY
```

### 4️⃣ Deploy the Contract

```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network sepolia
```

### 5️⃣ Launch Frontend

Simply open `frontend/index.html` in your browser and connect MetaMask.

---

## 🧩 Accessibility & UX Highlights

- 🎨 Dark mode + animated gradient background  
- 🧊 Glassmorphism design with smooth transitions  
- 📱 Fully responsive layout for mobile + desktop  
- 🔔 Toast notifications for actions and errors  
- ♿ Semantic HTML & keyboard navigation support  

---

## 👤 Author

- **Pius Ezekiel** – [GitHub](https://github.com/PiusEzekiel)

---

## 📄 License

MIT License

