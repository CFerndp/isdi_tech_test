import "@testing-library/jest-dom";
import { server } from "./mock/server";
import { afterAll, afterEach, beforeAll } from "vitest";

import nodeFetch, { Request, Response } from "node-fetch";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.fetch = nodeFetch;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Request = Request;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
global.Response = Response;

// Establish API mocking before all tests.
beforeAll(() => {
  server.listen();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
