import { useState, useEffect } from "react";
import { Agent } from "../types/agent";
import { AgentCard } from "./AgentCard";
import { AgentDetails } from "./AgentDetails";
import { api } from "../services/api";
import { mockAgents } from "../data/mockAgents"; // Fallback data

interface AgentGridProps {
  agents?: Agent[];
}

export const AgentGrid: React.FC<AgentGridProps> = ({
  agents: initialAgents,
}) => {
  const [agents, setAgents] = useState<Agent[]>(initialAgents || mockAgents);
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAgents = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api.getAgents();
        if (response.success && response.data) {
          setAgents(response.data);
        } else {
          setError(response.error || "Failed to fetch agents");
          // Fallback to mock data
          setAgents(mockAgents);
        }
      } catch (err) {
        setError("Failed to fetch agents");
        // Fallback to mock data
        setAgents(mockAgents);
      }
      setLoading(false);
    };

    if (!initialAgents) {
      fetchAgents();
    }
  }, [initialAgents]);

  const handleFork = async (agentId: string) => {
    try {
      const response = await api.deployAgent(agentId);
      if (response.success) {
        // Refresh the agents list
        const updatedAgents = await api.getAgents();
        if (updatedAgents.success && updatedAgents.data) {
          setAgents(updatedAgents.data);
        }
        setSelectedAgent(null);
      } else {
        setError(response.error || "Failed to fork agent");
      }
    } catch (err) {
      setError("Failed to fork agent");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading agents...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
        <div className="mt-4">Showing mock data as fallback:</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onClick={setSelectedAgent} />
        ))}
      </div>

      {selectedAgent && (
        <AgentDetails
          agent={selectedAgent}
          onClose={() => setSelectedAgent(null)}
          onFork={handleFork}
        />
      )}
    </div>
  );
};
