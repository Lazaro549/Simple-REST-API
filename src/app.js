import "dotenv/config";
import express from "express";
import itemsRoutes from "./routes/items.routes.js";
import authRoutes from "./auth/auth.routes.js";

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/items", itemsRoutes);

app.get("/", (req, res) => {
  res.json({ status: "API is running" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
