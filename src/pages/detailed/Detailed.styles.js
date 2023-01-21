import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Colors from '../../themes/colors';

export const PrimaryImageStyled = styled.img`
  height: auto;
  width: 100%;
  border-radius: 10px;
`

export const ContainerBodyStyled = styled(Card)`
  margin-top: 20px;
  padding: 30px;
`
export const ButtonStyled = styled(Button)`
  margin-bottom: 20px;
  flex: 1;
`
export const OriginDetailsContainer = styled.div`
  display: flex;
  gap: 10px
`

export const HeaderText = styled.h1`
  color: ${Colors.primary};
  font-weight: bold;
`

export const AltNameText = styled.p`
  color: gray
`

export const ButtonContainerStyled = styled.div`
  gap: 10px;
  display: flex;
`
