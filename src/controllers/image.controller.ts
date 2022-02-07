import { ImageService } from "@/services/image.service";
import { Request, Response } from "express";

export async function getImages(req: Request, res: Response) {
  return res.json(ImageService.get());
}
