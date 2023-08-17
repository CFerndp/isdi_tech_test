import { Router } from "express";
import { TASK_ROUTES } from "../routes";

const router = Router();

const tasks = [
  { id: 1, name: "Task 1", done: false },
  { id: 2, name: "Task 2", done: true },
];

router.get(TASK_ROUTES.getTasks, (req, res) => {
  return res.send(tasks);
});

export default router;
