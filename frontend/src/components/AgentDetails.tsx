import { useEffect } from "react";
import { AgentDetailsProps } from "../types/agent";
import { useAgent } from "../hooks/useAgent";

export const AgentDetails: React.FC<AgentDetailsProps> = ({
  agent: initialAgent,
  onClose,
  onFork,
}) => {
  const { agent, loading, error, recordMilestone } = useAgent(
    initialAgent?.id || ""
  );

  const displayAgent = agent || initialAgent;

  if (!displayAgent) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full m-4">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{displayAgent.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span
              className={`
              px-2 py-1 rounded text-sm
              ${
                displayAgent.status === "available"
                  ? "bg-gray-200"
                  : displayAgent.status === "claimed"
                  ? "bg-yellow-200"
                  : "bg-green-200"
              }
            `}
            >
              {displayAgent.status.charAt(0).toUpperCase() +
                displayAgent.status.slice(1)}
            </span>
            <span className="text-sm text-gray-600">
              {displayAgent.category}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{displayAgent.description}</p>

          <div className="mb-4">
            <div className="text-sm text-gray-600">Original Builder</div>
            <div className="font-medium">{displayAgent.originalBuilder}</div>
          </div>

          <div className="mb-4">
            <div className="text-sm text-gray-600">Revenue Generated</div>
            <div className="font-medium">
              ${displayAgent.revenueGenerated.toLocaleString()}
            </div>
          </div>

          <div className="mb-6">
            <div className="text-sm text-gray-600">GitHub Repository</div>
            <a
              href={displayAgent.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {displayAgent.githubRepo}
            </a>
          </div>

          {/* History from Celestia */}
          {agent?.history && agent.history.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">History</h3>
              <div className="space-y-2">
                {agent.history.map((event, index) => (
                  <div key={index} className="text-xs text-gray-600">
                    {new Date(event.timestamp).toLocaleDateString()}:{" "}
                    {event.action}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Milestones */}
          {agent?.milestones && agent.milestones.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-2">Milestones</h3>
              <div className="space-y-2">
                {agent.milestones.map((milestone, index) => (
                  <div key={index} className="text-xs bg-blue-50 p-2 rounded">
                    {milestone.description}
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => onFork(displayAgent.id)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Fork & Improve
          </button>

          {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
        </div>
      </div>
    </div>
  );
};
