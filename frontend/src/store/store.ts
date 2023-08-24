import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "@/features/tasks/taskSlice";
import { taskApi } from "@/services/task.ts";
export const store = configureStore({
  reducer: {
    [taskApi.reducerPath]: taskApi.reducer,
    task: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(taskApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
