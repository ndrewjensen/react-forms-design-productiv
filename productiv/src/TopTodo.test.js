import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";
import {INITIAL_TODOS} from "./_testCommon"


describe("productiv TopTodo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={INITIAL_TODOS} />);
  });

  it("contains expected text", function () {
    const { container, debug } = render(<TopTodo todos={INITIAL_TODOS} />);

    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container).toContainHTML("<b>Test1</b>");
    expect(container).toContainHTML("<small> priority: 1</small>");
    expect(container).toContainHTML("<small>Test1 Description</small>");
  //   expect(container).toContainHTML(`
  //   <div><div class="Todo"><div><b>Test1</b><small> priority: 1</small></div><div><small>Test1 Description</small></div></div></div>`);
  });

  it("matches snapshot", function () {
    const { container } = render(<TopTodo todos={INITIAL_TODOS} />);
    expect(container).toMatchSnapshot();
  });
});
