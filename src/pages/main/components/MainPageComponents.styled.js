import React from 'react';
import styled from 'styled-components';
import Colors from '../../../themes/colors';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HeaderTextStyled = styled.h1`
  font-weight: bold;
`

const DivHeaderContainerStyled = styled.div`
  margin-top: 50px;
  color: ${Colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainPageLogoStyled = styled.img`
  max-width: 400px;
`

const MainPageVectorStyled = styled.img`
  max-width: 100px;
`

const ImageButtonOverlay = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, .5);
  overflow: hidden;
  width: 100%;
  height:0;
  transition: .5s ease;
`

const ImageContainerCardStyled = styled(Card)`
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 200px;
  border-radius: 10px;
  display: block;
`

const ContainerCardStyled = styled(Card)`
  &:hover ${ImageButtonOverlay} {
    bottom: 0;
    height: 100%;
  }
`
const ContainerButtonStyled = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  min-width: 150px;
`

export {
  HeaderTextStyled,
  DivHeaderContainerStyled,
  MainPageLogoStyled,
  MainPageVectorStyled,
  ImageContainerCardStyled,
  ImageButtonOverlay,
  ContainerCardStyled,
  ContainerButtonStyled,
}