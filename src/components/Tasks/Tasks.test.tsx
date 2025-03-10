import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/react";
import Tasks from ".";

vi.mock("../../context/TaskContext", () => ({
  useTaskContext: () => ({
    tasks: [
      { id: 1, title: "Test Task 1", priority: "High" },
      { id: 2, title: "Test Task 2", priority: "Low" },
    ],
    priorityFilter: "All",
  }),
}));

describe("Tasks Component", () => {
  it("should display one or more tasks", () => {
    render(<Tasks searchQuery="task 1"/>);

    const tasks = screen.getAllByTestId("task");
    expect(tasks.length).toBeGreaterThanOrEqual(1);
  });
});
