import React from 'react';
import Header from './components/Header';
import { DivBodyStyled, DivVideoBackground } from './Main.styled';
import MainPageContent from './components/MainPageContent'
import Container from 'react-bootstrap/Container';

const Main = () => {
  return (
    <Container>
      <DivBodyStyled>
        <Header />
        <MainPageContent />
      </DivBodyStyled>
    </Container>
  )

}

export default Main;