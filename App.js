import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", null, "Hello World");

const jsxHeading = <h2 id="heading">Hello this is jsx heading 🚀</h2>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
