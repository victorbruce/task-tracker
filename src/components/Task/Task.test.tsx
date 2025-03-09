import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Task from ".";

describe("Task Component", () => {
  it("should render a task title", () => {
    render(<Task />);

    expect(screen.getByTestId("task-title")).toBeInTheDocument();
  });
});
