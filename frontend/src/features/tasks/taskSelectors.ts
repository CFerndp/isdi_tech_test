import { RootState } from "@/store/store.ts";

export const getTasksSelector = (state: RootState) => state.task.tasks;
