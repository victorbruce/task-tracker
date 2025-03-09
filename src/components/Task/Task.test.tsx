import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Task, { TaskProp } from ".";

describe("Task Component", () => {
  it("should render a task title", () => {
    const mockTask: TaskProp = {
      id: 1,
      title: "Learn React",
      priority: "High",
    };
    render(<Task task={mockTask} />);

    expect(screen.getByTestId("task-title")).toBeInTheDocument();
  });
});
