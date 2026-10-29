import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { env } from "./config/env.js";
import { apiLimiter } from "./middleware/rateLimiter.js";
import { sanitize } from "./middleware/sanitize.js";
import { notFound, errorHandler } from "./middleware/errorHandler.js";

const app = express();

// ===== 1) Security & parsing middlewares =====
app.use(helmet());
app.use(cors({ origin: env.clientUrl, credentials: true }));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());
app.use(sanitize);
app.use("/api", apiLimiter);

// ===== 2) Routes =====
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// ===== 3) Errors (لازم يكونوا آخر إشي) =====
app.use(notFound);
app.use(errorHandler);

export default app;