import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pixelRoutes from "./routes/pixelRoutes.js";
import aiAgentRoutes from "./routes/aiAgentRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", pixelRoutes);
app.use("/", aiAgentRoutes);

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
