import "./pre-start"; // Must be the first import
import app from "@server";
import logger from "@shared/Logger";

const PORT = Number(process.env.PORT || 3000);

app.listen(PORT, () => {
  logger.info(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
