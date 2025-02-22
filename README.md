# Mammathon Backend API

This is the backend API for the Mammathon, handling smart contract interactions for pixel purchases and AI agents on an **Optimistic Rollup with Celestia's data availability layer**.

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

## 🌟 Celestia Integration

### Data Availability Layer

We use Celestia to ensure permanent availability of:

- Agent metadata and state
- Historical actions and updates
- Milestone achievements
- Revenue distribution events

### Implementation

```typescript
// Store agent data permanently
const height = await celestiaService.storeAgentData(agent);

// Retrieve agent history
const history = await celestiaService.getAgentHistory(agentId);

// Record milestones
const milestone = await celestiaService.recordMilestone(agentId, {
  description: "First 100 users",
  timestamp: Date.now(),
});
```

## 🔄 Conduit Integration

### Real-time Updates

Conduit provides real-time streaming for:

- Agent state changes
- Revenue updates
- Fork events
- Milestone achievements

### Implementation

```typescript
// Subscribe to agent updates
conduit.subscribeToAgent(agentId, (update) => {
  console.log("Agent updated:", update);
});

// Subscribe to revenue
conduit.subscribeToRevenue(agentId, (revenue) => {
  console.log("New revenue:", revenue);
});
```

## 🔜 Next Steps

### Phase 1: Core Infrastructure

- [ ] Deploy Celestia node
- [ ] Configure namespace and data schemas
- [ ] Set up Conduit streams
- [ ] Implement error handling and retries

### Phase 2: Smart Contract Integration

- [ ] Deploy revenue sharing contract
- [ ] Implement staking mechanism
- [ ] Add milestone verification
- [ ] Create fork management system

### Phase 3: Agent Enhancement

- [ ] Add agent performance metrics
- [ ] Implement reputation system
- [ ] Create discovery algorithm
- [ ] Add automated testing

### Phase 4: Community Features

- [ ] Add governance mechanisms
- [ ] Implement voting system
- [ ] Create builder profiles
- [ ] Add social features

## 🛠 Development Guide

### Setting up Celestia

1. Install Celestia node
2. Configure environment:

```env
CELESTIA_NODE_URL=your-node-url
CELESTIA_NAMESPACE=immortal-agents
```

### Setting up Conduit

1. Configure Conduit streams
2. Set environment:

```env
CONDUIT_WS_URL=your-websocket-url
CONDUIT_API_KEY=your-api-key
```

### Running the Stack

```bash
# Start Celestia node
celestia light start

# Start Conduit
conduit start

# Start backend
npm run dev

# Start frontend
cd frontend && npm run dev
```

## 📊 Monitoring & Maintenance

### Celestia Health Checks

- Monitor data availability
- Track namespace usage
- Verify block confirmations

### Conduit Monitoring

- Track stream health
- Monitor subscription status
- Check message delivery

## 🤝 Contributing

### Areas for Contribution

1. **Celestia Integration**

   - Improve data schemas
   - Add verification methods
   - Optimize storage

2. **Conduit Features**

   - Add new stream types
   - Improve reconnection logic
   - Enhance message handling

3. **Frontend Components**

   - Add real-time visualizations
   - Improve UX for updates
   - Add analytics dashboard

4. **Documentation**
   - Add integration guides
   - Document best practices
   - Create troubleshooting guide

## 🔒 Security Considerations

1. **Data Availability**

   - Implement proof verification
   - Add redundancy checks
   - Monitor block confirmations

2. **Real-time Updates**

   - Validate message signatures
   - Implement rate limiting
   - Add replay protection

3. **Smart Contracts**
   - Audit revenue sharing
   - Verify stake management
   - Test fork mechanics

## 📈 Performance Optimization

1. **Celestia**

   - Batch updates
   - Optimize data schemas
   - Cache common queries

2. **Conduit**

   - Message compression
   - Connection pooling
   - Optimize subscriptions

3. **Frontend**
   - Implement virtual scrolling
   - Add progressive loading
   - Optimize re-renders
