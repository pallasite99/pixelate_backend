import express from "express";
import {
  deployAiAgent,
  getAgentMetadata,
} from "../controllers/aiAgentController.js";

const router = express.Router();

router.post("/deploy-ai-agent", deployAiAgent);
router.get("/get-agent-metadata", getAgentMetadata);

export default router;
