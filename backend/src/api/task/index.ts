import { Router } from "express";
import { TASK_ROUTES } from "../routes";

const router = Router();

router.get(TASK_ROUTES.getTasks, (req, res) => {
  return res.send("Hello World!");
});

export default router;
