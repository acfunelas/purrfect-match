import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import React from 'react';
import Col from 'react-bootstrap/Col';
import {
  CardStyled,
  FontAwesomeIconRatedStyled,
  FontAwesomeIconUnratedStyled, PawGraphContainerStyled,
  PawsContainerStyled, RowStyled, TextInfoContainerStyled, TextPawInfoStyled, TextTitleStyled
} from './Graphs.styles';

const createArray = (num, type = 1) => {
  let newArray = [];
  if (type === 1) {
    for(let x = 0; x < num; x++) {
      newArray.push(x);
    }
  } else {
    for(let x = 0; x < (5 - num); x++) {
      newArray.push(x);
    }
  }

  return newArray;
}

const PawGraphGenerator = (props) => {
  const {value, id} = props;

  return (
    <Col xs={12} md={6} lg={4}>
      <CardStyled>
        <PawGraphContainerStyled> 
          <TextInfoContainerStyled>
            <TextTitleStyled>{id}</TextTitleStyled>
            <TextPawInfoStyled>({value}/5 paws)</TextPawInfoStyled>
          </TextInfoContainerStyled>
          <div>
            <PawsContainerStyled>
              {createArray(value).map((value) => {
                return (
                  <FontAwesomeIconRatedStyled key={ id + "-" + value } icon={solid('paw')} />
                )
              })}
              { createArray(value, 2).map((value) => {
                return (
                  <FontAwesomeIconUnratedStyled key={ id+ "-" + value } icon={solid('paw')} />
                )
              })}
            </PawsContainerStyled>
          </div>

        </PawGraphContainerStyled>
      </CardStyled>
    </Col>
  )
}

const Graphs = (props) => {
  const {breedInfo} = props;
  
  
  return (
    <RowStyled>
      <h5>RATINGS</h5>
      <PawGraphGenerator id="ADAPTABILITY" value={breedInfo.adaptability} />
      <PawGraphGenerator id="AFFECTION" value={breedInfo.affection_level} />
      <PawGraphGenerator id="CHILD FRIENDLY" value={breedInfo.child_friendly} />
      <PawGraphGenerator id="DOG FRIENDLY" value={breedInfo.dog_friendly} />
      <PawGraphGenerator id="ENERGY LEVEL" value={breedInfo.energy_level} />
      <PawGraphGenerator id="HEALTH ISSUES" value={breedInfo.health_issues} />
      <PawGraphGenerator id="INTELIGENCE" value={breedInfo.intelligence} />
      <PawGraphGenerator id="SOCIAL NEEDS" value={breedInfo.social_needs} />
      <PawGraphGenerator id="SOCIAL" value={breedInfo.stranger_friendly} />
    </RowStyled>
  )
}

export default Graphs;