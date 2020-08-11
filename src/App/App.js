import React from "react";
import Context from "../Component/Context";
import ContextTwo from "../Component/ContextTwo";
import ComponentContextProvider from "../Context/ComponentsContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ComponentContextProvider>
        <Context />
        <ContextTwo />
      </ComponentContextProvider>
    </div>
  );
}

export default App;
