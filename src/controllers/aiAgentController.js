import { pixels } from "./pixelController";

export const deployAiAgent = async (req, res) => {
  try {
    const { agentId } = req.body;
    const pixel = pixels.find((p) => p.id === agentId);

    if (!pixel) {
      return res.status(404).json({ success: false, error: "Agent not found" });
    }

    if (pixel.status !== "available") {
      return res
        .status(400)
        .json({ success: false, error: "Agent not available for deployment" });
    }

    // Update agent status
    pixel.status = "active";

    res.json({ success: true, agent: pixel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAgentMetadata = async (req, res) => {
  try {
    const { id } = req.query;
    const agent = pixels.find((p) => p.id === id);

    if (!agent) {
      return res.status(404).json({ success: false, error: "Agent not found" });
    }

    res.json({ success: true, agent });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
