import { Agent } from "../types/agent";

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const api = {
  // Get all pixels/agents
  getAgents: async (): Promise<ApiResponse<Agent[]>> => {
    try {
      const response = await fetch(`${API_URL}/get-pixels`);
      const data = await response.json();
      return { success: true, data: data.pixels };
    } catch (error) {
      return { success: false, error: "Failed to fetch agents" };
    }
  },

  // Get specific agent metadata
  getAgentMetadata: async (agentId: string): Promise<ApiResponse<Agent>> => {
    try {
      const response = await fetch(
        `${API_URL}/get-agent-metadata?id=${agentId}`
      );
      const data = await response.json();
      return { success: true, data: data.agent };
    } catch (error) {
      return { success: false, error: "Failed to fetch agent metadata" };
    }
  },

  // Deploy/fork an agent
  deployAgent: async (agentId: string): Promise<ApiResponse<any>> => {
    try {
      const response = await fetch(`${API_URL}/deploy-ai-agent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentId }),
      });
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: "Failed to deploy agent" };
    }
  },

  // Transfer agent ownership
  transferAgent: async (
    fromAddress: string,
    toAddress: string,
    agentId: string
  ): Promise<ApiResponse<any>> => {
    try {
      const response = await fetch(`${API_URL}/transfer-pixel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fromAddress, toAddress, agentId }),
      });
      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      return { success: false, error: "Failed to transfer agent" };
    }
  },
};
