let heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from react"
);

let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);
