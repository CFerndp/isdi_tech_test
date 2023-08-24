import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Task } from "@/types/task.ts";
import { BackendResponse } from "@/services/types.ts";

export const taskApi = createApi({
  reducerPath: "taskApi",
  tagTypes: ["Task"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.API_URL || "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<BackendResponse<Task[]>, void>({
      query: () => "/task",
      providesTags: ["Task"],
    }),
    deleteTask: builder.mutation<BackendResponse<Task>, string>({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const { useGetTasksQuery, useDeleteTaskMutation } = taskApi;
