import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";
import { INITIAL_TODO } from "./_testCommon";


describe("productiv Todo", function () {
  it("renders without crashing", function () {
    render(<Todo todo={INITIAL_TODO} />);
  });

  it("contains expected text", function () {
    const { container } = render(<Todo todo={INITIAL_TODO} />);
    const html = `<div><div class="Todo"><div><b>Test1</b><small> priority: 1</small></div><div><small>Test1 Description</small></div></div></div>`
    //QUESTION: What am I doing wrong here?
    // const html = `
    //   <div>
    //     <div class="Todo">
    //       <div>
    //         <b>Test1</b>
    //         <small> priority: 1</small>
    //       </div>
    //       <div>
    //         <small>Test1 Description</small>
    //       </div>
    //     </div>
    //   </div>`
    expect(container.querySelector(".Todo")).toBeInTheDocument();
    expect(container).toContainHTML("<b>Test1</b>");
    expect(container).toContainHTML("<small> priority: 1</small>");
    expect(container).toContainHTML("<small>Test1 Description</small>");
    expect(container).toContainHTML(html.replace(/[\n\t]/g,""));
  });

  it("matches snapshot", function () {
    const { container } = render(<Todo todo={INITIAL_TODO} />);
    expect(container).toMatchSnapshot();
  });
});
