import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

export default Task;
