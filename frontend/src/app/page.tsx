"use client";

import { useState } from "react";
import { AgentGrid } from "../components/AgentGrid";
import { FeaturedAgents } from "../components/FeaturedAgents";
import { CategoryFilter } from "../components/CategoryFilter";
import { mockAgents } from "../data/mockAgents";
import { Agent } from "../types/agent";

const categories = Array.from(
  new Set(mockAgents.map((agent) => agent.category))
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllAgents, setShowAllAgents] = useState(false);

  const filteredAgents = selectedCategory
    ? mockAgents.filter((agent) => agent.category === selectedCategory)
    : mockAgents;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-4">
            Immortal Agent Homepage
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover and fork AI agents from successful hackathon projects. Each
            agent lives forever, generating value and sharing revenue with
            original builders.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <FeaturedAgents
          agents={filteredAgents}
          onAgentClick={(agent) => console.log("Selected agent:", agent)}
        />

        <div className="text-center mb-8">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {!showAllAgents ? (
          <div className="text-center">
            <button
              onClick={() => setShowAllAgents(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Show All Agents
            </button>
            <p className="text-sm text-gray-500 mt-2">
              {filteredAgents.length - 5} more agents available
            </p>
          </div>
        ) : (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">All Agents</h2>
            <AgentGrid agents={filteredAgents} />
          </div>
        )}
      </div>
    </main>
  );
}
