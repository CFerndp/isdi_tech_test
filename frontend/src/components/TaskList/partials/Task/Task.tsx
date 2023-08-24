import React, { useState } from "react";
import { TaskProps } from "@/components/TaskList/partials/Task/types.ts";

export const Task: React.FC<TaskProps> = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex justify-start gap-1">
      <input
        type="text"
        value={task.name}
        onChange={(e) => console.log(e)}
        disabled={!isEditing}
      />
      <label className="flex gap-1 text-xl mr-1">
        - Done:
        <input
          type="checkbox"
          disabled={!isEditing}
          checked={task.done}
          onChange={(e) => console.log(e)}
        />
      </label>
      <button
        className="bg-green-500 text-white rounded p-1 border-2 border-black"
        onClick={() => setIsEditing(!isEditing)}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="bg-red-500 text-white rounded p-1 border-2 border-black">
        Delete
      </button>
    </div>
  );
};
