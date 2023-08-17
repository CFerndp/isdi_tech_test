import "module-alias/register";
import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import taskRouter from "@/api/task";

//For env File
dotenv.config();

const PORT = process.env.PORT || 8000;

const MDB_USER = process.env.MDB_USER || "root";
const MDB_PASS = process.env.MDB_PASS || "example";
const MDB_HOST = process.env.MDB_HOST || "localhost";
const MDB_PORT = process.env.MDB_PORT || "27017";
const MDB_NAME = process.env.MDB_NAME || "tasks_db";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(taskRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

const start = async () => {
  try {
    await mongoose.connect(
      `mongodb://${MDB_USER}:${MDB_PASS}@${MDB_HOST}:${MDB_PORT}/${MDB_NAME}?authSource=admin`,
    );

    app.listen(PORT, () => {
      console.log(
        `⚡️[server]: Server is running at https://localhost:${PORT}`,
      );
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
