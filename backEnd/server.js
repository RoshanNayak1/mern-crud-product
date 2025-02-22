import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import productRoutes from "./routes/product.route.js";
import { fileURLToPath } from "url";


// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname= path.dirname(__filename);
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware for JSON parsing
app.use("/api/products",productRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Serve React Vite frontend from backend in production

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.resolve(__dirname, "../frontEnd/dist"); // Correct path
  app.use(express.static(frontendPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
