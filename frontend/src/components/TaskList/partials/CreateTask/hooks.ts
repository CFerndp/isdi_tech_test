import { useForm } from "react-hook-form";
import { CreateTaskForm } from "@/components/TaskList/partials/CreateTask/types.ts";
import { useCreateTaskMutation } from "@/services/task.ts";

export const useSubmitTask = () => {
  const [createTask, { isLoading }] = useCreateTaskMutation();
  const { register, handleSubmit } = useForm<CreateTaskForm>();
  const handleFormSubmit = (data: CreateTaskForm) => {
    createTask({ name: data.name });
  };

  return {
    register,
    isLoading,
    handleSubmit: handleSubmit(handleFormSubmit),
  };
};
