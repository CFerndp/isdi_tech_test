import request from "supertest";

import { describe, expect, test } from "@jest/globals";

import { COMMON_ROUTES } from "@/api/routes";
import { app } from "@/app";

describe(`Given a ${COMMON_ROUTES.helloWorld} get request`, () => {
  describe("When the request is successful", () => {
    test("Then it should return a 200 status code", async () => {
      const response = await request(app).get(COMMON_ROUTES.helloWorld);
      expect(response.status).toBe(200);
    });
  });
});
