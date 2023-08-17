import Task from "@/models/task";

export default async (id: string) => {
  return Task.findByIdAndDelete(id);
};
