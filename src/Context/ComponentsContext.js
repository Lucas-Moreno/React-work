import React, { createContext, useState } from "react";

export const ComponentsContext = createContext();

const ComponentsContextProvider = props => {
  const [isShow, setIsShow] = useState(false);
  const [isShowTwo, setIsShowTwo] = useState(false);

  const toggle = () => {
    setIsShow(!isShow);
  };
  const toggleTwo = () => {
    setIsShowTwo(!isShowTwo);
  };

  return (
    <ComponentsContext.Provider
      value={{ isShow, isShowTwo, toggle, toggleTwo }}
    >
      {props.children}
    </ComponentsContext.Provider>
  );
};

export default ComponentsContextProvider;
