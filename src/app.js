import express from "express";
import cors from "cors";
import gomokuRoutes from "./routes/gomoku_routes.js";
import authRoutes from "./routes/auth_routes.js";
import { auth } from "./middleware/auth_middleware.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, 
}));

app.use(express.json());

app.use("/api/gomoku", auth, gomokuRoutes);
app.use("/api/auth", authRoutes);

app.use((req, res) => {
  res.status(404).json({
      error: "Route not found",
      path: req.originalUrl,
  });
});

export default app;
