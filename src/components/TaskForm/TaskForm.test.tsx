import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TaskForm from ".";
import { TaskProvider } from "../../context/TaskContext";

describe("Task Form Component", () => {
  beforeEach(() => {
    render(
      <TaskProvider>
        <TaskForm />
      </TaskProvider>
    );
  });

  it("should display an input field", () => {
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should have a placeholder 'Add a task'", () => {
    expect(screen.getByPlaceholderText(/Add a task/i)).toBeInTheDocument();
  });

  it("should allow users to type into the field'", async () => {
    const inputField = screen.getByRole("textbox");

    await userEvent.type(inputField, "build a task tracker");

    expect(inputField).toHaveValue("build a task tracker");
  });

  it("should display a submit button", () => {
    expect(screen.getByRole("button", { name: /add/i })).toBeInTheDocument();
  });

  it("should clear the input after submitting", async () => {
    const inputField = screen.getByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /add/i });

    await userEvent.type(inputField, "build a task tracker");
    await userEvent.click(submitButton);

    expect(inputField).toHaveValue("");
  });
});
