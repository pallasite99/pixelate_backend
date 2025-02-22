import { Agent } from "../types/agent";

interface ConduitMessage {
  type: "agent_update" | "fork" | "revenue" | "milestone";
  data: any;
}

interface ConduitSubscription {
  unsubscribe: () => void;
}

export class ConduitService {
  private ws: WebSocket | null = null;
  private subscriptions: Map<string, Set<(data: any) => void>> = new Map();

  constructor() {
    this.connect();
  }

  private connect() {
    const wsUrl = process.env.NEXT_PUBLIC_CONDUIT_WS_URL || "";
    this.ws = new WebSocket(wsUrl);

    this.ws.onmessage = (event) => {
      const message: ConduitMessage = JSON.parse(event.data);
      const subscribers = this.subscriptions.get(message.type);
      if (subscribers) {
        subscribers.forEach((callback) => callback(message.data));
      }
    };

    this.ws.onclose = () => {
      setTimeout(() => this.connect(), 1000); // Reconnect after 1 second
    };
  }

  // Subscribe to agent updates
  subscribeToAgent(
    agentId: string,
    callback: (update: Partial<Agent>) => void
  ): ConduitSubscription {
    const type = "agent_update";
    if (!this.subscriptions.has(type)) {
      this.subscriptions.set(type, new Set());
    }

    const subscribers = this.subscriptions.get(type)!;
    const wrappedCallback = (data: any) => {
      if (data.agentId === agentId) {
        callback(data);
      }
    };

    subscribers.add(wrappedCallback);

    // Send subscription message
    this.ws?.send(
      JSON.stringify({
        type: "subscribe",
        agent: agentId,
      })
    );

    return {
      unsubscribe: () => {
        subscribers.delete(wrappedCallback);
        this.ws?.send(
          JSON.stringify({
            type: "unsubscribe",
            agent: agentId,
          })
        );
      },
    };
  }

  // Subscribe to all forks
  subscribeToForks(callback: (fork: any) => void): ConduitSubscription {
    const type = "fork";
    if (!this.subscriptions.has(type)) {
      this.subscriptions.set(type, new Set());
    }

    const subscribers = this.subscriptions.get(type)!;
    subscribers.add(callback);

    return {
      unsubscribe: () => subscribers.delete(callback),
    };
  }

  // Subscribe to revenue updates
  subscribeToRevenue(
    agentId: string,
    callback: (revenue: number) => void
  ): ConduitSubscription {
    const type = "revenue";
    if (!this.subscriptions.has(type)) {
      this.subscriptions.set(type, new Set());
    }

    const subscribers = this.subscriptions.get(type)!;
    const wrappedCallback = (data: any) => {
      if (data.agentId === agentId) {
        callback(data.amount);
      }
    };

    subscribers.add(wrappedCallback);

    return {
      unsubscribe: () => subscribers.delete(wrappedCallback),
    };
  }

  // Subscribe to milestones
  subscribeToMilestones(
    agentId: string,
    callback: (milestone: any) => void
  ): ConduitSubscription {
    const type = "milestone";
    if (!this.subscriptions.has(type)) {
      this.subscriptions.set(type, new Set());
    }

    const subscribers = this.subscriptions.get(type)!;
    const wrappedCallback = (data: any) => {
      if (data.agentId === agentId) {
        callback(data);
      }
    };

    subscribers.add(wrappedCallback);

    return {
      unsubscribe: () => subscribers.delete(wrappedCallback),
    };
  }
}
