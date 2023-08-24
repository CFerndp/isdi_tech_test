import { describe, expect, test } from "@jest/globals";
import { getDBConnectionURL } from "@/utils";

describe("Given a getDBConnectionURL function", () => {
  describe("When it is called with the correct arguments", () => {
    test("Then it should return a valid connection URL", () => {
      const URL = getDBConnectionURL({
        name: "test",
        host: "localhost",
        port: "27017",
        pass: "test",
        user: "test",
      });

      expect(URL).toBe(
        "mongodb://test:test@localhost:27017/test?authSource=admin",
      );
    });
  });
});
