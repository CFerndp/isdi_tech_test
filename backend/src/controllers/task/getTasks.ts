import Task from "@/models/task";

export default async () => {
  return Task.find();
};
