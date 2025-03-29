import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1 id="heading">Hello world from react</h1>
 *    </div>
 * </div>
 */

let parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "Hello world from react")
  )
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
