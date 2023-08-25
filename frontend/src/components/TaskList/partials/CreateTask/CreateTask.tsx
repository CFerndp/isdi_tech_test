import React from "react";
import { useSubmitTask } from "@/components/TaskList/partials/CreateTask/hooks.ts";
import { Loading } from "@/components/Loading/Loading.tsx";

export const CreateTask: React.FC = () => {
  const { handleSubmit, register, isLoading } = useSubmitTask();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <form
      className="border-2 mb-1 grid grid-cols-2 p-1"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center">
        <label htmlFor="name">Name:</label>
        <input
          className="border ml-1 hover:border-blue-500"
          id="name"
          type="text"
          placeholder="Name your task..."
          {...register("name", { required: true })}
        />
      </div>
      <input
        type="submit"
        className="bg-blue-500 text-white rounded p-1 border-2 border-black hover:bg-blue-700"
      />
    </form>
  );
};
