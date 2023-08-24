import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import taskRouter from "@/api/task";
import { COMMON_ROUTES } from "@/api/routes";

export const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(taskRouter);
app.get(COMMON_ROUTES.helloWorld, (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});
