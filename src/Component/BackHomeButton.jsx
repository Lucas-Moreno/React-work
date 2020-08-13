import React from "react";
import { Link } from "react-router-dom";
import { BackButton } from "../Styled/styled";

const BackHomeButton = () => {
  return (
    <div>
      <Link to="/">
        <BackButton>Back to home</BackButton>
      </Link>
    </div>
  );
};

export default BackHomeButton;
