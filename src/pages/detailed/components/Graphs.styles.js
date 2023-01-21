import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Colors from '../../../themes/colors';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const RowStyled = styled(Row)`
  padding: 10px;
  margin-top: 20px;
`

export const CardStyled = styled(Card)`
  border-radius: 10px;
  display: block;
  padding: 15px;
  margin-bottom: 20px;

`

export const FontAwesomeIconRatedStyled = styled(FontAwesomeIcon)`
  color: ${Colors.primary};
  margin-left: 10px; 
`

export const FontAwesomeIconUnratedStyled = styled(FontAwesomeIcon)`
  color: ${Colors.disabled};
  margin-left: 10px;
`
export const TextPawInfoStyled = styled.p`
  color: ${Colors.disabled};
  font-size: 12px;
  margin-bottom: 0px;
`

export const PawGraphContainerStyled = styled.div`
  display: flex;
  position: relative
`

export const PawsContainerStyled = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`
export const TextTitleStyled = styled.h6`
  margin-bottom: 0;
`

export const TextInfoContainerStyled = styled.div`
  width: 120px
`
