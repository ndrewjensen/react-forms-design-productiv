import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";

import { INITIAL_TODO } from "./_testCommon"
import EditableTodo from "./EditableTodo";

const { getByDisplayValue } = screen;

describe("productiv EditableTodo", function () {
  it("renders without crashing", function () {
    render(<EditableTodo todo={INITIAL_TODO} />);
  });

  it("contains expected text when not editing", function () {
    const { container, debug } = render(<EditableTodo todo={INITIAL_TODO} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container).toContainHTML("<b>Test1</b>");
    expect(container).toContainHTML("<small> priority: 1</small>");
    expect(container).toContainHTML("<small>Test1 Description</small>");
    expect(container.querySelector('.EditableTodo-toggle')).toBeInTheDocument();
    expect(container.querySelector('.EditableTodo-delBtn')).toBeInTheDocument();
  });

  it("renders form with expected text when editing", function () {
    const { container, debug } = render(<EditableTodo todo={INITIAL_TODO} />);
    fireEvent.click(container.querySelector('.EditableTodo-toggle'))
    expect(container.querySelector('.NewTodoForm')).toBeInTheDocument();
    expect(getByDisplayValue('Test1')).toBeInTheDocument();
    expect(getByDisplayValue('Test1 Description')).toBeInTheDocument();
    expect(getByDisplayValue('Ultra-Über')).toBeInTheDocument();

  });

  it("delete button should call remove function", function () {
    const remove = jest.fn();
    remove.mockClear();
    
    const { container, debug } = render(<
      EditableTodo 
        todo={INITIAL_TODO} 
        remove={remove} 
    />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    fireEvent.click(container.querySelector('.EditableTodo-delBtn'))
    expect(remove).toHaveBeenCalledWith(1);
  })

  it("matches snapshot", function () {
    const { container } = render(<EditableTodo todo={INITIAL_TODO} />);
    expect(container).toMatchSnapshot();
  });
});
