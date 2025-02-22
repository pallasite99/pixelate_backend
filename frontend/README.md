# Immortal Agent Homepage

A platform that ensures hackathon projects live forever by creating incentives for continuous development and improvement.

# Problems

For most Hackathon Projects

The Lifecycle Problem
├── Initial Build is x hours/days/weeks
├── Demo & Presentation
└── Project Death (90%)
├── No continued development
├── Code becomes stale
├── Links/deployments break
└── Value proposition rarely realized (many have jobs/studies they go back to despite impressive wins/use cases)

The Early Project Monetization Problem(s)
├── Pre-token stage projects struggle to monetize (ai project potential huge though, many recognise this)
├── No clear path from prototype to revenue (many dont even try, hacker vs founder mode)
└── Difficulty maintaining development momentum (post hackathon)

The Million Dollar Homepage had problems too

- Static Content: 547 out of the 2,816 links are completely dead today.
- No Value Evolution: 1-time purchase means declining value over time.
- No Active Maintenance: No incentive to keep content fresh

## Vision

The Immortal Agent Homepage reimagines the Million Dollar Homepage concept for AI.

Instead of static pixels, we showcase 100 AI agents that:

- Live forever on Celestia's data availability layer
- Generate real revenue through actual usage
- Can be forked and improved by new builders
- Share revenue between original and active builders

Before: After:
[Hackathon Project] → [Immortal Agent Slot]
↓ ↓
[Initial Excitement] → [Revenue Potential]
↓ ↓
[Abandonment] → [Active Development]

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
- Get better terms for early support (those who stake the most for the longest get access to future tokenisation)
- Access to agent services

### How It Works

Initial Platform Launch

- **Curated Initial Agents**: 100 AI agents from hackathons get permanent homepage slots.
- **Focus**: Clear use cases & working demos.

NFT Creation

- Each agent slot = **NFT** tracking project evolution.
- **Metadata**:
  - Original implementation
  - GitHub link
  - Team info & status

## Builder Mechanics

Project Evolution

- Teams fork projects & submit updates.
- Progress tracked via:
  - GitHub activity
  - Demo updates
  - User metrics & revenue

##Builder Benefits

- Full revenue control
- Access to user staking pool
- Token launch support
- Homepage visibility

## User Staking

Staking Process

- Users stake on projects, recorded on NFTs.
- Early stakers get priority in token launches.

Staker Benefits

- Early access to agent services
- Priority in token launches
- Direct connection to teams
- Project progress visibility

## Platform Role

Infrastructure

- Tracks projects & verifies progress.
- Manages staking & builds community.

Future Value

- Token launch support
- User-builder connections
- Progress certification
- Community governance

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

Building for Mammothon 2025
