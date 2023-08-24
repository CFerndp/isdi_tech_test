import { Task } from "@/types/task.ts";
import { useState } from "react";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "@/services/task.ts";

export const useHandleTask = (task: Task) => {
  const [deleteTask, { isLoading: isLoadingDelete }] = useDeleteTaskMutation();
  const [updateTask, { isLoading: isLoadingUpdate }] = useUpdateTaskMutation();

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
    if (name !== task.name || done !== task.done) {
      updateTask({
        _id: task._id,
        name,
        done,
      });
    }

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
    isLoading: isLoadingDelete || isLoadingUpdate,
    handleOnDoneChange,
    handleOnNameChange,
    handleOnDeleteClick,
    handleActionButton: isEditing ? handleOnSaveClick : handleOnEditClick,
  };
};
