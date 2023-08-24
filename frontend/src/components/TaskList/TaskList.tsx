import React from "react";
import { useGetTasksQuery } from "@/services/task.ts";

const TaskList: React.FC = () => {
  const { data: tasks, isFetching } = useGetTasksQuery();

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      {!tasks || tasks.length === 0 ? (
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
