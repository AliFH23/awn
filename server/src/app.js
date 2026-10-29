import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";

const app = express();

// ===== Middlewares (بتشتغل بالترتيب على كل طلب) =====
app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// ===== Routes =====
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;