import React from 'react'
import { MainPageLogoStyled, MainPageVectorStyled, DivHeaderContainerStyled } from './MainPageContent.styles';

const Header = () => {
  return (
    <DivHeaderContainerStyled>
      <MainPageVectorStyled src="/images/cat-vector.png" alt='cat-vector' />
      <MainPageLogoStyled src="/images/logo.png" alt='logo' />
      <p>Find your purrfect feline companion</p>
    </DivHeaderContainerStyled>
  )
}

export default Header;