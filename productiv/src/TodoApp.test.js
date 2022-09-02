import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";
import { INITIAL_TODOS } from "./_testCommon";

//FIXME: This testing suite is not complete


describe("productiv TodoApp", function () {
  it("renders without crashing", function () {
    render(<TodoApp initialTodos={ INITIAL_TODOS }  />);
  });

  it("contains expected text", function () {
    const { container, debug } = render(<TodoApp initialTodos={INITIAL_TODOS}/>);

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