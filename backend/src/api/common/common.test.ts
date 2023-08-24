import request from "supertest";

import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";

import { COMMON_ROUTES } from "@/api/routes";
import { app } from "@/app";
import {
  closeMongooseConnectionForTesting,
  getMongooseConnectionForTesting,
} from "@/__tests__/utils";

beforeEach(async () => {
  await getMongooseConnectionForTesting();
});

afterEach(async () => {
  await closeMongooseConnectionForTesting();
});

describe(`Given a ${COMMON_ROUTES.helloWorld} get request`, () => {
  describe("When the request is successful", () => {
    test("Then it should return a 200 status code", async () => {
      const response = await request(app).get(COMMON_ROUTES.helloWorld);
      expect(response.status).toBe(200);
    });
  });
});
