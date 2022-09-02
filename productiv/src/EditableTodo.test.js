import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TopTodo from "./TopTodo";
import { INITIAL_TODO } from "./_testCommon"
import EditableTodo from "./EditableTodo";


describe("productiv EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={INITIAL_TODO} />);
  });

  it("contains expected text not editing", function () {
    const { container, debug } = render(<EditableTodo todo={INITIAL_TODO} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container).toContainHTML("<b>Test1</b>");
    expect(container).toContainHTML("<small> priority: 1</small>");
    expect(container).toContainHTML("<small>Test1 Description</small>");
    expect(container.querySelector('.EditableTodo-toggle')).toBeInTheDocument();
    expect(container.querySelector('.EditableTodo-delBtn')).toBeInTheDocument();
  });
  
  it("contains expected text when editing", function () {
    const { container, debug, queryByDisplayValue } = render(<EditableTodo todo={INITIAL_TODO} />);
    fireEvent.click(container.querySelector('.EditableTodo-toggle'))
    expect(container.querySelector('.NewTodoForm')).toBeInTheDocument();
    expect(queryByDisplayValue('Test1')).toBeInTheDocument();
    expect(queryByDisplayValue('Test1 Description')).toBeInTheDocument();
    expect(queryByDisplayValue('Ultra-Über')).toBeInTheDocument();

  });



  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={INITIAL_TODO} />);
    expect(container).toMatchSnapshot();
  });
});
