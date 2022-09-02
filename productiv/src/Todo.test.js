import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";

const INITIAL_TODO=
  {
    id: 1,
    title: "Test1",
    description: "Test1 Description",
    priority: 1,
  };

describe("productiv Todo", function () {
  it("renders without crashing", function () {
    render(<Todo todo ={ INITIAL_TODO }  />);
  });

  it("contains expected text", function () {
    const { container } = render(<Todo todo ={ INITIAL_TODO }  />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container).toContainHTML("<b>Test1</b>")
    expect(container).toContainHTML("<small> priority: 1</small>")
    expect(container).toContainHTML("<small>Test1 Description</small>");
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo todo ={ INITIAL_TODO } />);
    expect(container).toMatchSnapshot();
  });
});