import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // Middleware for JSON parsing
app.use("/api/products",productRoutes);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Serve React Vite frontend from backend in production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend", "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
