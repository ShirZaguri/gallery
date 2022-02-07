import { getImages } from "@/controllers/image.controller";
import { Router } from "express";

const imageRouter = Router();

imageRouter.get("/", getImages);

export default imageRouter;
