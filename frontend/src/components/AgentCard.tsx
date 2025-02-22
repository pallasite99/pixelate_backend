import { AgentCardProps } from "../types/agent";

export const AgentCard: React.FC<AgentCardProps> = ({
  agent,
  onClick,
  featured,
}) => {
  const statusColors = {
    available: "bg-gray-200",
    claimed: "bg-yellow-200",
    active: "bg-green-200",
  };

  return (
    <div
      className={`p-4 ${
        statusColors[agent.status]
      } rounded-lg cursor-pointer hover:opacity-80 transition-all transform hover:scale-105 ${
        featured ? "shadow-lg hover:shadow-xl" : ""
      }`}
      onClick={() => onClick(agent)}
    >
      <div className="text-sm font-semibold truncate">{agent.name}</div>
      <div className="text-xs text-gray-600 flex items-center gap-2">
        <span>{agent.category}</span>
        {featured && (
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded">
            Featured
          </span>
        )}
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="text-xs">
          ${agent.revenueGenerated.toLocaleString()}
        </div>
        {featured && (
          <div className="text-xs text-green-600">Ready to Fork</div>
        )}
      </div>
      {featured && (
        <div className="mt-2 text-xs text-gray-500 line-clamp-2">
          {agent.description}
        </div>
      )}
    </div>
  );
};
