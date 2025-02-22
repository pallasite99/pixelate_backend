import { useState, useEffect } from "react";
import { Agent } from "../types/agent";
import { CelestiaService } from "../services/celestia";
import { ConduitService } from "../services/conduit";

const celestia = new CelestiaService();
const conduit = new ConduitService();

interface AgentData extends Agent {
  history: any[];
  milestones: any[];
}

export function useAgent(agentId: string) {
  const [agent, setAgent] = useState<AgentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    let subscriptions: { unsubscribe: () => void }[] = [];

    const loadAgent = async () => {
      try {
        // Get agent history from Celestia
        const history = await celestia.getAgentHistory(agentId);

        // Subscribe to real-time updates via Conduit
        subscriptions.push(
          conduit.subscribeToAgent(agentId, (update) => {
            if (mounted) {
              setAgent((prev) => (prev ? { ...prev, ...update } : null));
            }
          })
        );

        // Subscribe to revenue updates
        subscriptions.push(
          conduit.subscribeToRevenue(agentId, (revenue) => {
            if (mounted) {
              setAgent((prev) =>
                prev ? { ...prev, revenueGenerated: revenue } : null
              );
            }
          })
        );

        // Subscribe to milestones
        subscriptions.push(
          conduit.subscribeToMilestones(agentId, (milestone) => {
            if (mounted) {
              setAgent((prev) =>
                prev
                  ? {
                      ...prev,
                      milestones: [...prev.milestones, milestone],
                    }
                  : null
              );
            }
          })
        );

        if (mounted) {
          setAgent((prev) => (prev ? { ...prev, history } : null));
          setLoading(false);
        }
      } catch (err) {
        if (mounted) {
          setError(
            err instanceof Error ? err.message : "Failed to load agent data"
          );
          setLoading(false);
        }
      }
    };

    loadAgent();

    return () => {
      mounted = false;
      subscriptions.forEach((sub) => sub.unsubscribe());
    };
  }, [agentId]);

  const recordMilestone = async (milestone: any) => {
    try {
      const height = await celestia.recordMilestone(agentId, milestone);
      const available = await celestia.verifyDataAvailability(height);
      return available;
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to record milestone"
      );
      return false;
    }
  };

  const updateAgent = async (update: Partial<Agent>) => {
    try {
      const height = await celestia.storeAgentData({ ...agent!, ...update });
      return await celestia.verifyDataAvailability(height);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update agent");
      return false;
    }
  };

  return {
    agent,
    loading,
    error,
    recordMilestone,
    updateAgent,
  };
}
