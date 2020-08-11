import React from "react";
import Component from "../Component/Context";
import ComponentContextProvider from "../Context/ComponentsContext";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ComponentContextProvider>
        <Component />
      </ComponentContextProvider>
    </div>
  );
}

export default App;
