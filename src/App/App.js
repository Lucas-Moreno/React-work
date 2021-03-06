import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../Theme/theme";
import { NavButton, Nav } from "../Styled/styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <Title>Upgrade my Skills on React</Title>
        <Nav>
          <Link to="context">
            <NavButton>Context Api</NavButton>
          </Link>
          <Link to="styled">
            <NavButton>Styled Components</NavButton>
          </Link>
        </Nav>
      </div>
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol";
  }
`;

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
`;

export default App;
