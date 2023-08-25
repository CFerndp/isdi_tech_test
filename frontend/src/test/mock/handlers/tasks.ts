import { rest } from "msw";

const URL = `http://localhost:8000`;

export const handlers = [
  rest.get(`${URL}/task`, (_req, res, ctx) => {
    // successful response
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            _id: "64de420a09b0ac8cbb22feac",
            name: "Task 1",
            done: true,
          },
          {
            _id: "64de420a09b0ac8cbb22fead",
            name: "Task 2",
            done: true,
          },
        ],
        message: "Ok",
      }),
    );
  }),
];
