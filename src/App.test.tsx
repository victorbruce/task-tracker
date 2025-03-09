import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { TaskProvider } from "./context/TaskContext";

describe("App", () => {
  it("renders the App component", () => {
    render(
      <TaskProvider>
        <App />
      </TaskProvider>
    );

    expect(screen.getByTestId("app")).toBeInTheDocument();
  });
});
