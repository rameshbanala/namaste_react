import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", null, "Hello World");

//react element
const jsxHeading = <h2 id="heading">Hello this is jsx heading 🚀</h2>;

const HeadingComponent = () => {
  return <h1>Hello this is functional component</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
