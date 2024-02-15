import { afterEach, describe, expect, test } from "vitest";
import { render, cleanup } from "@testing-library/react";
import Nav from "../components/Nav/Nav.tsx";

afterEach(cleanup);

describe("Nav", () => {
  test("should show the company title", () => {
    const { getByText } = render(<Nav />);
    expect(getByText(/ClearScore/i)).toBeDefined();
  });
});
