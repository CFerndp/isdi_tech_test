import { setupServer } from "msw/node";

import { handlers as handlersTask } from "./handlers/tasks";

export const server = setupServer(...handlersTask);
