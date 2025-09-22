import express from "express";
import cors from "cors";
import healthRoutes from "./routes/health_routes.js";
import gomokuRoutes from "./routes/gomoku_routes.js";
import authRoutes from "./routes/auth_routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
}));

app.use(express.json());

app.use("/api/health", healthRoutes);
app.use("/api/gomoku", gomokuRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
      error: "Route not found",
      path: req.originalUrl,
  });
});

export default app;
