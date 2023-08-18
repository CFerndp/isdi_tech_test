import Task from "@/models/task";

export default async (id: string, name: string, done: boolean) => {
  await Task.findByIdAndUpdate(id, { name, done });

  return Task.findById(id);
};
