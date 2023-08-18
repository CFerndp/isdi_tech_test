import Task from "@/models/task";

export default async (name: string) => {
  return await Task.create({ name, done: false });
};
