import React, { useContext } from "react";
import { ComponentsContext } from "../Context/ComponentsContext";

const ContextTwo = () => {
  const { isShowTwo, toggleTwo } = useContext(ComponentsContext);
  return (
    <div>
      {isShowTwo ? <h1>Salut</h1> : <h1>Aurevoir</h1>}
      <button onClick={toggleTwo}>click</button>
    </div>
  );
};

export default ContextTwo;
