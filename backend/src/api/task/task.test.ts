import mongoose from "mongoose";
import request from "supertest";

import { afterEach, beforeEach, describe, expect, test } from "@jest/globals";
import { getDBConnectionURL } from "@/utils";

import configs from "@/config";
import { COMMON_ROUTES } from "@/api/routes";
import { app } from "@/app";

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(
    getDBConnectionURL({
      user: configs.MDB_USER,
      pass: configs.MDB_PASS,
      host: configs.MDB_HOST,
      port: configs.MDB_PORT,
      name: configs.MDB_NAME,
    }),
  );
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe(`Given a ${COMMON_ROUTES.helloWorld} get request`, () => {
  describe("When the request is successful", () => {
    test("Then it should return a 200 status code", async () => {
      const response = await request(app).get(COMMON_ROUTES.helloWorld);
      expect(response.status).toBe(200);
    });
  });
});
