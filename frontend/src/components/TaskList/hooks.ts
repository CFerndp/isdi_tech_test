import { useGetTasksQuery } from "@/services/task.ts";

export const useTasks = () => {
  const { data, isFetching } = useGetTasksQuery();

  return {
    tasks: data?.data || [],
    isLoading: isFetching,
  };
};
