import React from "react";
import ContextOne from "../Component/ContextOne";
import ContextTwo from "../Component/ContextTwo";
import ComponentContextProvider from "../Context/ComponentsContext";
import BackHomeButton from "./BackHomeButton";

const Context = () => {
  return (
    <div>
      <h1>useContext</h1>
      <ComponentContextProvider>
        <ContextOne />
        <ContextTwo />
      </ComponentContextProvider>
      <BackHomeButton />
    </div>
  );
};

export default Context;
