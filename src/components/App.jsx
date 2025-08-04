import React, { useState } from "react";

function App() {
  const [clicks, setClicks] = useState("Hello");
  const [mouseoverd, SetMouse] = useState(false);

  function Click() {
    setClicks("Submitted");
  }

  function mousehandler() {
    SetMouse(true);
  }
  function mouseout() {
    SetMouse(false);
  }

  return (
    <div className="container">
      <h1>{clicks}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseoverd ? "black" : "white" }}
        onMouseOver={mousehandler}
        onClick={Click}
        onMouseOut={mouseout}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
