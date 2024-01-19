const heading = React.createElement(
  "div",
  { id: "heading", xyz: "abc" },
  React.createElement("div", { id: "heading", xyz: "abc" }, [
    [
      React.createElement("h1", { id: "heading", xyz: "abc" }, "I am h1"),
      React.createElement("h2", { id: "heading", xyz: "abc" }, "I am h2"),
    ],
    [
      React.createElement("h1", { id: "heading", xyz: "abc" }, "I am h1"),
      React.createElement("h2", { id: "heading", xyz: "abc" }, "I am h2"),
    ],
  ])
); //react cdn
// HTML Element / object / element content
// Need to create root inside react where it can do all the DOM manupulation
const root = ReactDOM.createRoot(document.getElementById("root")); //ReactDOM cdn
root.render(heading);

// heading is an react-element and react-element is nothing but normal js object
console.log(heading);
