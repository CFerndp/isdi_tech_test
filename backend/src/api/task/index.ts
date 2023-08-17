import { Router } from "express";

import getTasks from "@/controllers/task/getTasks";
import deleteTaskById from "@/controllers/task/deleteTaskById";

import { TASK_ROUTES } from "../routes";
import { GENERIC_MSGS, getResponse } from "@/api/response";

const router = Router();

router.get(TASK_ROUTES.getTasks, async (req, res) => {
  return res.send(getResponse(await getTasks(), GENERIC_MSGS.Ok));
});

router.delete(TASK_ROUTES.deleteTaskById, async (req, res) => {
  const id = req.params.id;

  try {
    const deletedTask = await deleteTaskById(id);
    return res.send(getResponse(deletedTask, GENERIC_MSGS.Deleted));
  } catch {
    return res.status(404).send(getResponse(null, GENERIC_MSGS.NotFound));
  }
});

export default router;
