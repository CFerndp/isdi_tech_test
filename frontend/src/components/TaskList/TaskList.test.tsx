import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import TaskList from "./TaskList.tsx";
import { TestWrapper } from "@/test/TestWrapper.tsx";

describe("Given a TaskList component", () => {
  describe("When the component is rendered", () => {
    test("Then it should render a list of tasks", async () => {
      render(
        <TestWrapper>
          <TaskList />
        </TestWrapper>,
      );

      expect(await screen.findByText("Id: 2fead")).toBeInTheDocument();
      expect(await screen.findByTestId("tasklist-container")).toMatchSnapshot();
    });
  });
});
