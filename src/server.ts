import express from "express";
import cors from "cors";
import BaseRouter from "./routes/index";

const app = express();

app.use(cors());

// Add APIs
app.use("/api", BaseRouter);

// Export express instance
export default app;
