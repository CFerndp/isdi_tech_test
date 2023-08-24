import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Task } from "@/types/task.ts";
import { BackendResponse } from "@/services/types.ts";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.API_URL || "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<BackendResponse<Task[]>, void>({
      query: () => "/task",
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
