import React, { useContext } from "react";
import { ComponentsContext } from "../Context/ComponentsContext";

const Context = () => {
  const { isShow, toggle } = useContext(ComponentsContext);
  return (
    <div>
      {isShow ? <h1>Hello</h1> : <h1>Bye</h1>}
      <button onClick={toggle}>click</button>
    </div>
  );
};

export default Context;
