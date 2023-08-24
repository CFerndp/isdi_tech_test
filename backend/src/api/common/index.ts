import { Request, Response, Router } from "express";
import { COMMON_ROUTES } from "@/api/routes";

const router = Router();

router.get(COMMON_ROUTES.helloWorld, (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

export default router;
