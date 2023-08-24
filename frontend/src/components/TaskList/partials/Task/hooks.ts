import { Task } from "@/types/task.ts";
import { useState } from "react";
import { useDeleteTaskMutation } from "@/services/task.ts";

export const useHandleTask = (task: Task) => {
  const [deleteTask, { isLoading }] = useDeleteTaskMutation();

  const [name, setName] = useState(task.name);
  const [done, setDone] = useState(task.done);

  const [isEditing, setIsEditing] = useState(false);

  const handleOnNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== "") {
      setName(event.target.value);
    }
  };

  const handleOnDoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDone(event.target.checked);
  };

  const handleOnEditClick = () => {
    setIsEditing(true);
  };

  const handleOnSaveClick = () => {
    setIsEditing(false);
  };

  const handleOnDeleteClick = () => {
    deleteTask(task._id);
  };

  return {
    id: task._id.slice(task._id.length - 5),
    name,
    done,
    isEditing,
    isLoading,
    handleOnDoneChange,
    handleOnNameChange,
    handleOnDeleteClick,
    handleActionButton: isEditing ? handleOnSaveClick : handleOnEditClick,
  };
};
