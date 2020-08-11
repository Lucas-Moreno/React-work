import React from "react";
import styled from "styled-components";

const StyledComponents = () => {
  return (
    <div>
      <Title>Hello</Title>
    </div>
  );
};

export default StyledComponents;

/* Styled Component with hover/media */

const Title = styled.h1`
  display: block;
  width: 18rem;
  margin: 4rem auto;
  padding: 1rem;
  font-size: 1.4rem;
  text-align: center;
  text-transform: uppercase;
  color: #65c3ba;
  border: 1px solid #65c3ba;

  :hover {
    border: 1px solid red;
    color: red;
  }

  @media screen and (min-width: 769px) {
    font-size: 1.2rem;
  }
`;
