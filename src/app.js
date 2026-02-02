import express from "express";
import itemsRoutes from "./routes/items.routes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/items", itemsRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
