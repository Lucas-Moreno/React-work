import styled from "styled-components";

/* Styled Component with props */

export const Title = styled.h1`
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

/* Color du text en vert si aucune color est définie */

export const Text = styled.p`
  color: ${({ color }) => color || "green"};
`;

export const Message = styled.p`
  color: ${({ success, error }) =>
    (success && "green") || (error && "red") || "#333"};
  background: ${({ success, error }) =>
    (success && "#c8e6c9") || (error && "#ffcdd2") || "#efefef"};
  padding: 1rem;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Box = styled.div`
  ${({ centerXY }) =>
    centerXY &&
    `
      display: flex;
      justify-content: center;
      align-items: center;
    `}

  height: 200px;
  background: #efefef;
`;

/* Styled Component with props ternary state */

export const TestClick = styled.div`
  background: ${props => (props.primary ? "red" : "blue")};
  color: ${props => (props.primary ? "black" : "white")};
  width: 50px;
  height: 50px;
`;

/* Extend a component */

export const Hello = styled.button`
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  font-size: 1rem;
  color: #333;
  background: #dedede;
  border-radius: 0.25rem;
  border: 1px solid #dedede;
  transition: color 0.2s;
  cursor: pointer;

  &:hover {
    background: #fff;
  }
`;

export const LargeHello = styled(Hello)`
  padding: 1rem 2rem;
`;

export const SendHello = styled(Hello)`
  color: white;
  background: #229dff;
  border: 1px solid #229dff;

  &:hover {
    color: #229dff;
  }
`;

export const StopHello = styled(Hello)`
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background: red;
  border: 1px solid red;

  &:hover {
    color: red;
  }
`;

/* Using theme */

export const Container = styled.div`
  border: ${({ theme }) => theme.borders.border};
`;

export const BackButton = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const NavButton = styled.button`
  color: white;
  background: #229dff;
  border: 1px solid #229dff;
  margin-right: 1rem;
  padding: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid #f24738;
  }
`;
