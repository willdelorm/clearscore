import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App tests", () => {
  test("renders App", () => {
    render(<App />);
    expect(screen.getByText(/ClearScore/i)).toBeDefined();
  });
});
