import request from "supertest";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const mockingoose = require("mockingoose");

import { beforeEach, describe, expect, test } from "@jest/globals";

import { TASK_ROUTES } from "@/api/routes";
import { app } from "@/app";

import {
  GET_TASKS_FIXTURES,
  POST_TASK_FIXTURES,
} from "@/__tests__/dataFixtures/tasks.datafixtures";

import Task from "@/models/task";

describe(`Given a ${TASK_ROUTES.getTasks} get request`, () => {
  describe("When the request is successful", () => {
    beforeEach(() => {
      mockingoose.resetAll();
      mockingoose(Task).toReturn(GET_TASKS_FIXTURES, "find");
    });

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

describe(`Given a ${TASK_ROUTES.createTask} POST request`, () => {
  describe("When the request is successful", () => {
    beforeEach(() => {
      mockingoose.resetAll();
      mockingoose(Task).toReturn(POST_TASK_FIXTURES, "create");
    });

    test("Then it should return a 200 status code", async () => {
      const response = await request(app).post(TASK_ROUTES.createTask);
      expect(response.status).toBe(200);
    });

    test("Then it should return a response with the data", async () => {
      const response = await request(app).post(TASK_ROUTES.createTask);

      expect(response.body.data.done).toBe(POST_TASK_FIXTURES.done);
    });
  });
});

describe(`Given a ${TASK_ROUTES.deleteTaskById} DELETE request`, () => {
  describe("When the request is successful", () => {
    beforeEach(() => {
      mockingoose.resetAll();
      mockingoose(Task).toReturn(POST_TASK_FIXTURES, "findByIdAndDelete");
    });

    test("Then it should return a 200 status code", async () => {
      const response = await request(app).delete(TASK_ROUTES.deleteTaskById);
      expect(response.status).toBe(200);
    });
  });
});
