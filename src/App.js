import React from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";

// import Pet from "./Pet";

// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", { id: "my-brand" }, "Adopt Me!w"),
//     ...[1, 2, 3, 4].map((i) => React.createElement("h1", {}, i)),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cockatiel",
//     }),
//     React.createElement(Pet, {
//       name: "Sudo",
//       animal: "Dog",
//       breed: "Wheaten Terrier",
//     }),
//   ]);
// };

const App= ()=>{

  return (
    
    <div>
      <h1>Adopt me!</h1>
     <SearchParams/>

    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById("root"));
