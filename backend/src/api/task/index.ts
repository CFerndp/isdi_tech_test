import { Router } from "express";
import { TASK_ROUTES } from "../routes";
import getTasks from "@/controllers/task/getTasks";

const router = Router();

router.get(TASK_ROUTES.getTasks, async (req, res) => {
  return res.send(await getTasks());
});

export default router;
