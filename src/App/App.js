import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Upgrade my Skills on React</h1>
      <Link to="context">
        <button>Context Api</button>
      </Link>
    </div>
  );
}

export default App;
