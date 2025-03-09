import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Task from ".";
import { TaskProvider } from "../../context/TaskContext";
import { ITask } from "../../context/TaskContext";

describe("Task Component", () => {
  it("should render a task title", () => {
    const mockTask: ITask = {
      id: 1,
      title: "Learn React",
      priority: "High",
    };
    render(
      <TaskProvider>
        <Task task={mockTask} />
      </TaskProvider>
    );

    expect(screen.getByTestId("task-title")).toBeInTheDocument();
  });
});
