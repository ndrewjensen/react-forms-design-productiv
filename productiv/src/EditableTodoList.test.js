import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import { INITIAL_TODOS } from "./_testCommon"
import EditableTodoList from "./EditableTodoList";

const { getByDisplayValue } = screen;

describe("productiv EditableTodoList", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList todos={INITIAL_TODOS} />);
  });

  it("renders EditableTodos", function () {
    const { container, debug } = render(<EditableTodoList todos={INITIAL_TODOS} />);
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(3)
  });

  it("renders nothing if no todos", function () {
    const { container, debug } = render(<EditableTodoList todos={[]} />);
    expect(container.querySelectorAll(".EditableTodo").length).toEqual(0)
  });

  it("matches snapshot", function () {
    const { container } = render(<EditableTodoList todos={INITIAL_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});
