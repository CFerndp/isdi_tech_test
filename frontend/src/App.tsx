import React from "react";
import TaskList from "@/components/TaskList/TaskList.tsx";

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;
