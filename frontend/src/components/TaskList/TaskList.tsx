import React from "react";
import { useSelector } from "react-redux";
import { getTasksSelector } from "@/features/tasks/taskSelectors.ts";

const TaskList: React.FC = () => {
  const tasks = useSelector(getTasksSelector);

  return (
    <div className="container mx-auto p-4">
      {tasks.length === 0 ? (
        <p className="text-xl">No tasks</p>
      ) : (
        <ul className="list-disc">
          {tasks.map((task) => (
            <li key={task.id} className="text-xl">
              {task.name} - {task.done ? "Done" : "Not done"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
