import React, { createContext, useState } from "react";

export const ComponentsContext = createContext();

const ComponentsContextProvider = props => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow(!isShow);
  };

  return (
    <ComponentsContext.Provider value={{ isShow, toggle }}>
      {props.children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsContextProvider;
