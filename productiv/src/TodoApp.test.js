import React from "react";
import { render } from "@testing-library/react";
import TodoApp from "./TodoApp";

let result;

describe("productiv TodoApp", function () {
  beforeEach(function () {
    result = render(<TodoApp initialTodos={[
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
    ]} 
    />);
  });


  it("renders without crashing", function () {
    render(<TodoApp  />);
  });

  it("contains expected text", function () {
    
    expect(result.getElement).toBeInTheDocument();
  });

  // it("matches snapshot", function () {
  //   const { container } = render(<TodoApp />);
  //   expect(container).toMatchSnapshot();
  // });
});