import { Router } from "express";

import getTasks from "@/controllers/task/getTasks";
import deleteTaskById from "@/controllers/task/deleteTaskById";
import updateTaskById from "@/controllers/task/updateTaskById";

import { GENERIC_MSGS, getResponse } from "@/api/response";

import { TASK_ROUTES } from "../routes";

const router = Router();

router.get(TASK_ROUTES.getTasks, async (req, res) => {
  return res.send(getResponse(await getTasks(), GENERIC_MSGS.Ok));
});

router.put(TASK_ROUTES.updateTaskById, async (req, res) => {
  const id = req.params.id;
  const { name, done } = req.body;

  try {
    const updatedTask = await updateTaskById(id, name, done);

    return res.send(getResponse(updatedTask, GENERIC_MSGS.Updated));
  } catch {
    return res.status(404).send(getResponse(null, GENERIC_MSGS.NotFound));
  }
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
