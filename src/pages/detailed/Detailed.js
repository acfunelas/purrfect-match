import React, { useEffect, useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../../helpers/API'
import {
  ContainerBodyStyled,
  PrimaryImageStyled,
  ButtonStyled,
  OriginDetailsContainer,
  HeaderText,
  AltNameText,
  ButtonContainerStyled,
} from './Detailed.styles'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Flag from 'react-world-flags'
import Graphs from './components/Graphs';
import LoadingContext from '../../context/LoadingContext';

const Detailed = () => {
  const [,setIsLoading] = useContext(LoadingContext);

  // variables and declarations
  const routerParams = useParams();
  const navigate = useNavigate();
  
  const [data, setData] = useState([]);
  const [details, setDetails] = useState([]);

  // useEffect and Functions
  const loadDetails = async(key) => {
    try {
      const response = await API.request(`/images/${key}`);
      if(response) {
        setData(response);
        setDetails(response.breeds[0])
      }
    } catch (error) {
      navigate('/error/404')
    } finally { 
      setTimeout(
        setIsLoading(false)
      , 5000)
    }
  }

  useEffect(() => {
    if (routerParams.key) {
      loadDetails(routerParams.key)
    }
  }, [routerParams])

  return (
    data.id && (
      <Container>
        <ContainerBodyStyled>
          <ButtonContainerStyled>
            <ButtonStyled onClick={() => {
              setIsLoading(true);
              navigate(`/?breed=${details.id}`);
            }}>
              Back
            </ButtonStyled>
            <ButtonStyled
              href={details.wikipedia_url}
              target="_blank"
              variant="success"
            >
              Go to Wiki
            </ButtonStyled>
          </ButtonContainerStyled>
          <Row>
            <Col xs={12} md={4}>
              <PrimaryImageStyled src={data.url} />
            </Col>
            <Col xs={12} md={8}>
              <HeaderText>{details.name.toUpperCase()}</HeaderText>
              {details.alt_names.length > 0 && (
                <AltNameText><i>({details.alt_names})</i></AltNameText>
              )}
              <OriginDetailsContainer>
                <Flag code={details.country_code} width={25} height={25} />
                <p>{details.origin}</p>
              </OriginDetailsContainer>
              <p>{details.temperament}</p>
              <p>{details.description}</p>
            </Col>
          </Row>
          <Graphs breedInfo={details}/>
        </ContainerBodyStyled>
     
      </Container>
    )
  )

}

export default Detailed;