import React from "react";
import { useSubmitTask } from "@/components/TaskList/partials/CreateTask/hooks.ts";

export const CreateTask: React.FC = () => {
  const { handleSubmit, register, isLoading } = useSubmitTask();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <form
      className="border-2 mb-1 flex justify-between items-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Name:</label>
        <input
          className="border ml-1"
          id="name"
          type="text"
          placeholder="Name your task..."
          {...register("name", { required: true })}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-500 text-white rounded p-1 border-2 border-black"
      />
    </form>
  );
};
