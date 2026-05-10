import express from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler.js";
import { router as route } from "./routes/index.js";
dotenv.config();

export const app = express();

if (process.env.NODE_ENV !== "test") {
  app.use(logger("dev", { immediate: true }));
}

app.use(helmet());

app.disable("x-powered-by");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.use(errorHandler.notFoundDefault);

app.use(errorHandler.errorDefault);
