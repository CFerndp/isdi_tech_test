import request from "supertest";

import { describe, expect, test } from "@jest/globals";

import { TASK_ROUTES } from "@/api/routes";
import { app } from "@/app";

import { GET_TASKS_FIXTURES } from "@/__tests__/dataFixtures/tasks.datafixtures";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockingoose = require("mockingoose");

import Task from "@/models/task";

describe(`Given a ${TASK_ROUTES.getTasks} get request`, () => {
  describe("When the request is successful", () => {
    mockingoose(Task).toReturn(GET_TASKS_FIXTURES);

    test("Then it should return a 200 status code", async () => {
      const response = await request(app).get(TASK_ROUTES.getTasks);
      expect(response.status).toBe(200);
    });

    test("Then it should return a response with the data array", async () => {
      const response = await request(app).get(TASK_ROUTES.getTasks);
      expect(response.body.data).toStrictEqual(GET_TASKS_FIXTURES);
    });
  });
});
