import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";
import imageCache from "@/shared/imageCache";

const PORT = Number(process.env.PORT || 3000);

imageCache.fetchImages().then(() =>
  app.listen(PORT, () => {
    logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
  })
);
