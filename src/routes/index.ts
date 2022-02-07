import { Router } from "express";
import imageRouter from "./image.router";

const baseRouter = Router();
baseRouter.use("/images", imageRouter);

export default baseRouter;
