import React from "react";
import { useTasks } from "@/components/TaskList/hooks.ts";

const TaskList: React.FC = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {tasks.length === 0 ? (
        <p className="text-xl">No tasks</p>
      ) : (
        <ul className="list-disc">
          {tasks.map((task) => (
            <li key={task._id} className="text-xl">
              {task.name} - {task.done ? "Done" : "Not done"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
