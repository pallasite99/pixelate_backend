import { Agent } from "../types/agent";
import { AgentCard } from "./AgentCard";

interface FeaturedAgentsProps {
  agents: Agent[];
  onAgentClick: (agent: Agent) => void;
}

export const FeaturedAgents: React.FC<FeaturedAgentsProps> = ({
  agents,
  onAgentClick,
}) => {
  // Get top 5 agents by revenue
  const topAgents = [...agents]
    .sort((a, b) => b.revenueGenerated - a.revenueGenerated)
    .slice(0, 5);

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Featured AI Agents</h2>
        <p className="text-gray-600">
          Top performing agents ready to be forked and improved
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {topAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            onClick={onAgentClick}
            featured={true}
          />
        ))}
      </div>
    </div>
  );
};
