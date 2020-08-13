import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Title,
  Text,
  Box,
  TestClick,
  Hello,
  LargeHello,
  SendHello,
  StopHello,
  Message,
  Container
} from "../Styled/styled";
import { ThemeProvider } from "styled-components";
import theme from "../Theme/theme";

const StyledComponents = () => {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow(!isShow);
  };
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>Hello</Title>
        <Text color="red">Red text</Text>
        <Text>Default text</Text>
        <Message>
          Vous avez 126 mails non lus dans votre boîte de réception
        </Message>
        <Message success>Votre message a bien été envoyé.</Message>
        <Message error>
          Une erreur est survenue, votre message n'a pas été envoyé.
        </Message>
        <Box centerXY></Box>
        {isShow ? <TestClick primary></TestClick> : <TestClick></TestClick>}
        <button onClick={toggle}>Click</button>
        <Hello>Hello</Hello>
        <LargeHello>LargeHello</LargeHello>
        <SendHello>SendHello</SendHello>
        <StopHello>StopHello</StopHello>
        <Link to="/">
          <button>Back to home</button>
        </Link>
      </Container>
    </ThemeProvider>
  );
};

export default StyledComponents;
