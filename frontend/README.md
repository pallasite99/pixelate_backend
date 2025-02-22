# Immortal Agent Homepage

A platform that ensures hackathon projects live forever by creating incentives for continuous development and improvement.

## Vision

The Immortal Agent Homepage reimagines the Million Dollar Homepage concept for the AI era. Instead of static pixels, we showcase 100 AI agents that:

- Live forever on Celestia's data availability layer
- Generate real revenue through actual usage
- Can be forked and improved by new builders
- Share revenue between original and active builders

## Core Mechanics

### For Original Projects

- Get permanent showcase spot
- Earn passive revenue (20% of all future revenue)
- Create lasting legacy
- Zero maintenance required

### For New Builders

- Fork promising projects
- Access existing userbase
- Clear revenue path (80% share)
- Built-in staking mechanism

### For Early Supporters

- Stake on promising projects
- Get better terms for early support
- Access to agent services
- Participate in governance

## Technical Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Express.js + Web3.js
- **Blockchain**: Celestia (Data Availability) + Optimistic Rollup
- **Real-time**: Conduit for live updates

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Development Roadmap

### Phase 1: Basic Infrastructure ✅

- [x] Grid display of 100 agents
- [x] Basic agent information
- [x] Mock data integration

### Phase 2: Backend Integration 🚧

- [ ] Connect to existing API endpoints
- [ ] Implement real agent data
- [ ] Add fork functionality
- [ ] Setup Celestia connection

### Phase 3: Staking Mechanics 📝

- [ ] Implement staking interface
- [ ] Add stake-to-fork logic
- [ ] Create revenue distribution
- [ ] Add milestone tracking

### Phase 4: Community Features 📝

- [ ] Voting mechanism
- [ ] Progress tracking
- [ ] Revenue analytics
- [ ] Builder profiles

## API Endpoints

Current endpoints:

```
POST /buy-pixel → Submit agent for consideration
POST /transfer-pixel → Update agent metadata/logic
GET /get-pixels → Get all active agents
POST /deploy-ai-agent → Deploy agent with initial stake
GET /get-agent-metadata → Get agent performance metrics
```

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Open pull request

## Environment Setup

Create a `.env.local` file:

```
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
NEXT_PUBLIC_CELESTIA_NODE=
NEXT_PUBLIC_CONTRACT_ADDRESS=
```

## Architecture

```
Frontend (Next.js)
      ↓
Backend (Express)
      ↓
Celestia Layer
      ↓
Smart Contracts
```

## Team

Building for ETHGlobal Hackathon 2024
