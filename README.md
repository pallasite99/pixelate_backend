# Mammathon Backend API

This is the backend API for the Mammathon, handling smart contract interactions for pixel purchases and AI agents on an **Optimistic Rollup with Celestia’s data availability layer**.

## Features
- **Pixel Purchase & Management** (ERC-721 NFTs)
- **AI Agent Deployment & Revenue Sharing**
- **Optimistic Rollup & Celestia Integration**
- **REST API for Smart Contract Interaction**

## Tech Stack
- **Node.js & Express.js** – API Backend
- **Web3.js** – Blockchain Interaction
- **Solidity** – Smart Contracts
- **Celestia** – Data Availability Layer
- **Optimistic Rollup** – Scalability Solution
- **Conduit** – Real-time Data Streaming

---

## 🚀 Setup & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/mammathon-backend.git
cd mammathon-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create a `.env` File
Create a `.env` file in the root directory and add the following:
```plaintext
BLOCKCHAIN_RPC_URL=https://demo.optimism.io
CONTRACT_ADDRESS=0x0000000000000000000000000000000000000000
WALLET_PRIVATE_KEY=0x0000000000000000000000000000000000000000000000000000000000000000
PORT=5000
```

### 4. Run the Server
```bash
npm start
```
Server will run on `http://localhost:5000`.

---

## 📡 API Endpoints

### **Pixel Management**
- `POST /buy-pixel` → Purchase a pixel
- `POST /transfer-pixel` → Transfer ownership of a pixel
- `GET /get-pixels` → Fetch pixel ownership details

### **AI Agent Management**
- `POST /deploy-ai-agent` → Deploy an AI agent
- `GET /get-agent-metadata` → Fetch AI agent details

---

## 🛠 Deployment
1. **Deploy Smart Contract** on **Optimism Testnet**.
2. **Update `.env` with Contract Address**.
3. **Deploy API to Cloud Provider** (e.g., AWS, Vercel, or DigitalOcean).
4. **Ensure Conduit is properly integrated** for real-time pixel updates.

---

## 🔒 Security Considerations
- Use **contract audits** before deployment.
- Implement **rate limiting** to prevent API abuse.
- Store **private keys securely** (never commit to GitHub).
- Use **proxy contracts** for upgradability.

---

## 🤝 Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`feature-xyz`).
3. Commit changes and push to your fork.
4. Submit a pull request!

---

## 📜 License
This project is licensed under the MIT License.

---

### 💡 Need Help?
For issues, open a GitHub issue or reach out to the team!

