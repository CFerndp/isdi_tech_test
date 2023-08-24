import request from "supertest";

import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";

import { TASK_ROUTES } from "@/api/routes";
import { app } from "@/app";
import {
  closeMongooseConnectionForTesting,
  getMongooseConnectionForTesting,
} from "@/__tests__/utils";

/* Connecting to the database before each test. */
beforeEach(async () => {
  await getMongooseConnectionForTesting();
});

/* Closing database connection after each test. */
afterEach(async () => {
  await closeMongooseConnectionForTesting();
});

describe(`Given a ${TASK_ROUTES.getTasks} get request`, () => {
  describe("When the request is successful", () => {
    test("Then it should return a 200 status code", async () => {
      const response = await request(app).get(TASK_ROUTES.getTasks);
      expect(response.status).toBe(200);
    });
  });
});
