import express, { Application } from "express";
import bodyParser from "body-parser";
import commonRouter from "@/api/common";
import taskRouter from "@/api/task";

export const app: Application = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.use(commonRouter);
app.use(taskRouter);