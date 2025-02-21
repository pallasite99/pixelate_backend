import express from "express";
import dotenv from "dotenv";
import Web3 from "web3";
import rateLimit from "express-rate-limit";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const web3 = new Web3(process.env.BLOCKCHAIN_RPC_URL);
const contractAddress = process.env.CONTRACT_ADDRESS;
const contractABI = []; // Add your contract ABI here

const contract = new web3.eth.Contract(contractABI, contractAddress);

app.use(cors());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
});
app.use(limiter);

// Buy Pixel API
app.post("/buy-pixel", async (req, res) => {
  try {
    const { userAddress, pixelId } = req.body;
    const price = web3.utils.toWei("0.01", "ether"); // Example price
    
    const tx = await contract.methods.buyPixel(pixelId).send({
      from: userAddress,
      value: price,
    });
    
    res.json({ success: true, transaction: tx });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Transfer Pixel API
app.post("/transfer-pixel", async (req, res) => {
  try {
    const { fromAddress, toAddress, pixelId } = req.body;
    
    const tx = await contract.methods.transferPixel(fromAddress, toAddress, pixelId).send({
      from: fromAddress,
    });
    
    res.json({ success: true, transaction: tx });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get Pixel Ownership API
app.get("/get-pixels", async (req, res) => {
  try {
    const pixels = await contract.methods.getAllPixels().call();
    res.json({ success: true, pixels });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
