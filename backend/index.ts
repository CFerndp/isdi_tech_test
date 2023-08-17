import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";

import taskRouter from "./src/api/task";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use(taskRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
