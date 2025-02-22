import { Agent } from "../types/agent";

interface CelestiaData {
  namespace: string;
  data: Uint8Array;
}

interface AgentHistory {
  timestamp: number;
  action: "fork" | "update" | "revenue";
  data: any;
}

export class CelestiaService {
  private readonly nodeUrl: string;
  private readonly namespace: string;

  constructor() {
    this.nodeUrl = process.env.NEXT_PUBLIC_CELESTIA_NODE || "";
    this.namespace = "immortal-agents"; // Our namespace for the application
  }

  // Store agent data permanently
  async storeAgentData(agent: Agent): Promise<string> {
    const data = new TextEncoder().encode(JSON.stringify(agent));
    const response = await fetch(`${this.nodeUrl}/submit_pfb`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        namespace: this.namespace,
        data: Array.from(data),
        gas_limit: 2000000,
      }),
    });

    const result = await response.json();
    return result.height; // Return block height for reference
  }

  // Retrieve agent history from Celestia
  async getAgentHistory(agentId: string): Promise<AgentHistory[]> {
    const response = await fetch(
      `${this.nodeUrl}/namespaced_data/${this.namespace}/${agentId}`
    );
    const data = await response.json();
    return data.map((item: CelestiaData) =>
      JSON.parse(new TextDecoder().decode(new Uint8Array(item.data)))
    );
  }

  // Store agent milestone/achievement
  async recordMilestone(agentId: string, milestone: any): Promise<string> {
    const data = {
      agentId,
      timestamp: Date.now(),
      type: "milestone",
      ...milestone,
    };

    const encoded = new TextEncoder().encode(JSON.stringify(data));
    const response = await fetch(`${this.nodeUrl}/submit_pfb`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        namespace: this.namespace,
        data: Array.from(encoded),
        gas_limit: 2000000,
      }),
    });

    const result = await response.json();
    return result.height;
  }

  // Verify data availability
  async verifyDataAvailability(height: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.nodeUrl}/block_data/${height}`);
      const data = await response.json();
      return data.available === true;
    } catch (error) {
      console.error("Error verifying data availability:", error);
      return false;
    }
  }
}
