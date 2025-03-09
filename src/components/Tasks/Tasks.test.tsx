import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Tasks from ".";
import { TaskProp } from "../Task";

describe("Tasks Component", () => {
  it("should display one or more tasks", () => {
    const mockTasks: TaskProp[] = [
      { id: 1, title: "Learn React", priority: "High" },
      { id: 2, title: "Write tests", priority: "Medium" },
    ];
    render(<Tasks tasks={mockTasks} />);

    const tasks = screen.getAllByTestId("task-title");
    expect(tasks.length).toBeGreaterThanOrEqual(1);
  });

  it("should display 'No tasks available' when there are no tasks", () => {
    render(<Tasks tasks={[]} />);

    expect(screen.getByText(/No tasks available/i)).toBeInTheDocument();
  });
});
