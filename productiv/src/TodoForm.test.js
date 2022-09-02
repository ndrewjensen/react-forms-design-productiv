import React from "react";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import TodoForm from "./TodoForm";
import { INITIAL_TODO } from "./_testCommon"
import {EditableTodo} from "./EditableTodo";

// EditableTodo.handleSave = jest.fn()

const handleSave = jest.fn();


describe("productiv TodoForm", function () {
  it("renders without crashing", function () {
    render(<TodoForm initialFormData={INITIAL_TODO} handleSave={handleSave} />);
  });

  it("contains expected text new todo", function () {
    const { container, debug, queryByPlaceholderText, queryByDisplayValue } = render(<TodoForm handleSave={handleSave}/>);

    expect(container.querySelector(".NewTodoForm")).toBeInTheDocument();
    expect(queryByPlaceholderText('Title')).toBeInTheDocument();
    expect(queryByPlaceholderText('Description')).toBeInTheDocument();
    expect(queryByDisplayValue('Meh')).toBeInTheDocument();
  });

  it("contains expected text when editing", function () {
    const { container, debug, queryByDisplayValue } = render(<TodoForm initialFormData={INITIAL_TODO} handleSave={handleSave} />);
    expect(container.querySelector('.NewTodoForm')).toBeInTheDocument();
    expect(queryByDisplayValue('Test1')).toBeInTheDocument();
    expect(queryByDisplayValue('Test1 Description')).toBeInTheDocument();
    expect(queryByDisplayValue('Ultra-Über')).toBeInTheDocument();
  });

  it("resets when edit todo submitted", function(){
    const { container, debug, queryByDisplayValue, queryByPlaceholderText } = render(<TodoForm initialFormData={INITIAL_TODO} handleSave={handleSave} />);

    const titleInput = queryByDisplayValue('Test1');
    fireEvent.change(titleInput, {target:{value:"Updated"}})
    const descripInput = queryByDisplayValue('Test1 Description');
    fireEvent.change(descripInput, {target:{value:"Description has been Updated"}})
    const prioInput = queryByDisplayValue('Ultra-Über');
    fireEvent.change(prioInput, {target:{value:3}});

    fireEvent.click(container.querySelector(".NewTodoForm-addBtn"));

    expect(queryByPlaceholderText('Title')).toBeInTheDocument();
    expect(queryByPlaceholderText('Description')).toBeInTheDocument();
    expect(queryByDisplayValue('Meh')).toBeInTheDocument();
  })


  // it("matches snapshot", function () {
  //   const { container } = render(<TodoForm todo={INITIAL_TODO} />);
  //   expect(container).toMatchSnapshot();
  });
// });
