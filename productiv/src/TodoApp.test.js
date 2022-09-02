import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

const INITIAL_TODOS= [
  {
    id: 1,
    title: "Test1",
    description: "Test1 Description",
    priority: 1,
  },
  {
    id: 2,
    title: "Test2",
    description: "Test2 Description",
    priority: 2,
  },
     {
    id: 3,
    title: "Test3",
    description: "Test3 Description",
    priority: 3,
  }
];

describe("productiv TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={ INITIAL_TODOS }  />);
  });

  it("contains expected text", function () {
    const { container, debug } = render(<TodoApp initialTodos={INITIAL_TODOS}/>);

    debug();
    // expect(result).toBeInTheDocument();
    expect(container).toContainHTML("Test1 Description");
    expect(container).toContainHTML("Add Nü");
    expect(container.querySelector("main")).toHaveClass("TodoApp");

  });

  // it("matches snapshot", function () {
  //   const { container } = render(<TodoApp />);
  //   expect(container).toMatchSnapshot();
  // });
});