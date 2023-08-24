import React from "react";
import { TaskProps } from "@/components/TaskList/partials/Task/types.ts";
import { useHandleTask } from "@/components/TaskList/partials/Task/hooks.ts";

export const Task: React.FC<TaskProps> = ({ task }) => {
  const {
    id,
    name,
    isEditing,
    done,
    isLoading,
    handleActionButton,
    handleOnDeleteClick,
    handleOnNameChange,
    handleOnDoneChange,
  } = useHandleTask(task);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="grid grid-cols-5 gap-1">
      <span className="flex items-center font-bold">Id: {id} </span>
      <input
        type="text"
        value={name}
        onChange={handleOnNameChange}
        disabled={!isEditing}
      />
      <label className="flex gap-1 text-xl mr-1">
        Done:
        <input
          type="checkbox"
          disabled={!isEditing}
          checked={done}
          onChange={handleOnDoneChange}
        />
      </label>
      <button
        className="bg-green-500 text-white rounded p-1 border-2 border-black"
        onClick={handleActionButton}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="bg-red-500 text-white rounded p-1 border-2 border-black"
        onClick={handleOnDeleteClick}
      >
        Delete
      </button>
    </div>
  );
};
