import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Tile from "../components/Tile/Tile";
import { Idea } from "../utils/types";

const data: Idea = {
  id: "1",
  title: "Test title",
  desc: "Test desc",
  created: new Date(),
  updated: new Date(),
};

describe("Tile tests", () => {
  beforeEach(() => {
    render(<Tile tileData={data} handleDelete={vi.fn()} handleUpdate={vi.fn()} />);
  });

  it("should show title", () => {
    expect(screen.getByText(/Test title/i)).toBeDefined();
  });

  it("should not show editing view", () => {
    expect(screen.queryByText(/Update/i)).toBeNull();
  });

  test("should show editing view on title click", async () => {
    const title = screen.getByText(/Test title/i);
    fireEvent.click(title);

    expect(await screen.findByText(/Update/i)).toBeDefined();
  });
});
