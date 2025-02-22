// Mock data store (replace with database/blockchain later)
export const pixels = Array.from({ length: 100 }, (_, i) => ({
  id: `agent-${i + 1}`,
  name: `AI Project ${i + 1}`,
  status: ["available", "claimed", "active"][i % 3],
  originalBuilder: `builder-${(i % 20) + 1}`,
  revenueGenerated: ((i * 137) % 100) * 100,
  description: `An innovative AI project from ETHGlobal hackathon`,
  githubRepo: `https://github.com/eth-global/project-${i + 1}`,
  category: [
    "ChatBot",
    "GameAI",
    "DataAnalysis",
    "Trading",
    "ContentGen",
    "ImageGen",
  ][i % 6],
  position: i + 1,
}));

export const getAllPixels = async (req, res) => {
  try {
    res.json({ success: true, pixels });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const buyPixel = async (req, res) => {
  try {
    const { userAddress, pixelId } = req.body;
    const pixel = pixels.find((p) => p.id === pixelId);

    if (!pixel) {
      return res.status(404).json({ success: false, error: "Pixel not found" });
    }

    if (pixel.status !== "available") {
      return res
        .status(400)
        .json({ success: false, error: "Pixel not available" });
    }

    // Update pixel status
    pixel.status = "claimed";
    pixel.originalBuilder = userAddress;

    res.json({ success: true, pixel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const transferPixel = async (req, res) => {
  try {
    const { fromAddress, toAddress, pixelId } = req.body;
    const pixel = pixels.find((p) => p.id === pixelId);

    if (!pixel) {
      return res.status(404).json({ success: false, error: "Pixel not found" });
    }

    if (pixel.originalBuilder !== fromAddress) {
      return res.status(403).json({ success: false, error: "Not authorized" });
    }

    // Transfer ownership
    pixel.originalBuilder = toAddress;

    res.json({ success: true, pixel });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
