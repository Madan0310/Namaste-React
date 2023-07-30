/* 
Creating Single Element
*/

// const heading = React.createElement(
//   "h1",
//   { id: "heading", name: "Madan" },
//   "Hello World in React"
// );
// console.log("heading:: ", heading); //  object

/* Creating Nested Elements 
<div id="parent">
    <div id="child1">
        <h1>I'm an h11 tag</h1>
        <h2>I'm an h21 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h12 tag</h1>
        <h2>I'm an h22 tag</h2>
    </div>
</div>
*/

const nestedElements = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", {}, "I'm an h11 tag"),
    React.createElement("h2", {}, "I'm an h21 tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "I'm an h12 tag"),
    React.createElement("h2", {}, "I'm an h22 tag"),
  ]),
]);

console.log(nestedElements); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedElements);
