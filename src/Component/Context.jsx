import React from "react";
import ContextOne from "../Component/ContextOne";
import ContextTwo from "../Component/ContextTwo";
import { Link } from "react-router-dom";
import ComponentContextProvider from "../Context/ComponentsContext";

const Context = () => {
  return (
    <div>
      <h1>useContext</h1>
      <ComponentContextProvider>
        <ContextOne />
        <ContextTwo />
      </ComponentContextProvider>
      <Link to="/">
        <button>Back to home</button>
      </Link>
    </div>
  );
};

export default Context;
