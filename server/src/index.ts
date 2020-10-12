import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
