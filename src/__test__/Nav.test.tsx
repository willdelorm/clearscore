import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav/Nav";

describe("Nav tests", () => {
  test("renders ClearScore", () => {
    render(<Nav />);
    expect(screen.getByText(/ClearScore/i)).toBeDefined();
  });
});
