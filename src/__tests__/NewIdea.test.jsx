import { afterEach, describe, expect, test } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import NewIdea from "../components/NewIdea/NewIdea.tsx";

afterEach(cleanup);

describe("NewIdea", () => {
  test("should reset on button click", () => {
    const { getByText } = render(<NewIdea />);
    expect(getByText(/Title/i)).toBeDefined();
  });
});
