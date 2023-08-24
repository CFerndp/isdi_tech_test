import { Task } from "@/types/task.ts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
  },
});

export const { setTasks } = taskSlice.actions;

export default taskSlice.reducer;
