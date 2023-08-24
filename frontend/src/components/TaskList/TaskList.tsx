import React from "react";
import { useTasks } from "@/components/TaskList/hooks.ts";
import { Task } from "@/components/TaskList/partials/Task/Task.tsx";
import { CreateTask } from "@/components/TaskList/partials/CreateTask/CreateTask.tsx";

const TaskList: React.FC = () => {
  const { tasks, isLoading } = useTasks();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 shadow-2xl">
      <CreateTask />
      {tasks.length === 0 ? (
        <p className="text-xl">No tasks</p>
      ) : (
        <>
          <p className="text-xl">
            #Tasks: <span className="font-bold">{tasks.length}</span>
          </p>
          <ul className="list-disc">
            {tasks.map((task) => (
              <li key={task._id} className="list-item m-1">
                <Task task={task} />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskList;
