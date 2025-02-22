export interface Agent {
  id: string;
  name: string;
  status: "available" | "claimed" | "active";
  originalBuilder: string;
  revenueGenerated: number;
  description: string;
  githubRepo: string;
  category: string;
  position: number; // 1-100 for grid position
}

export interface AgentCardProps {
  agent: Agent;
  onClick: (agent: Agent) => void;
  featured?: boolean;
}

export interface AgentDetailsProps {
  agent: Agent | null;
  onClose: () => void;
  onFork: (agentId: string) => void;
}
