import { Agent } from "../types/agent";

const categories = [
  "ChatBot",
  "GameAI",
  "DataAnalysis",
  "Trading",
  "ContentGen",
  "ImageGen",
];

// Create deterministic status assignments
const getStatus = (index: number): "available" | "claimed" | "active" => {
  if (index % 3 === 0) return "available";
  if (index % 3 === 1) return "claimed";
  return "active";
};

// Create deterministic revenue based on position
const getRevenue = (index: number): number => {
  return ((index * 137) % 100) * 100; // Deterministic but seems random
};

export const mockAgents: Agent[] = Array.from({ length: 100 }, (_, i) => ({
  id: `agent-${i + 1}`,
  name: `${categories[i % categories.length]} Project ${i + 1}`,
  status: getStatus(i),
  originalBuilder: `builder-${(i % 20) + 1}`,
  revenueGenerated: getRevenue(i),
  description: `An innovative ${categories[
    i % categories.length
  ].toLowerCase()} project from ETHGlobal hackathon`,
  githubRepo: `https://github.com/eth-global/${categories[
    i % categories.length
  ].toLowerCase()}-${i + 1}`,
  category: categories[i % categories.length],
  position: i + 1,
}));
