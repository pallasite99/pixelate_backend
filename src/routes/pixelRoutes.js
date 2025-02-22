import express from "express";
import {
  getAllPixels,
  buyPixel,
  transferPixel,
} from "../controllers/pixelController.js";

const router = express.Router();

router.get("/get-pixels", getAllPixels);
router.post("/buy-pixel", buyPixel);
router.post("/transfer-pixel", transferPixel);

export default router;
