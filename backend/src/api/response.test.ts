import { describe, test, expect } from "@jest/globals";

import { getResponse } from "@/api/response";

describe("Given a getResponse function", () => {
  describe("When it is invoked with undefined data", () => {
    test("Then it should return a response with the data undefined", () => {
      const data = undefined;
      const message = "OK";
      const response = getResponse(data, message);
      expect(response.data).toBeUndefined();
    });
  });

  describe("When it is invoked with a string data", () => {
    test("Then it should return a response with the data string", () => {
      const data = "Hello world!";
      const message = "OK";
      const response = getResponse(data, message);
      expect(response.data).toBe(data);
    });
  });

  describe("When it is invoked with a number data", () => {
    test("Then it should return a response with the data number", () => {
      const data = 1;
      const message = "OK";
      const response = getResponse(data, message);
      expect(response.data).toBe(data);
    });
  });
});
