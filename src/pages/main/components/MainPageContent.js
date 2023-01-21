import React, { useEffect, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate, useSearchParams } from 'react-router-dom';
import API from '../../../helpers/API';
import Colors from '../../../themes/colors';
import {
  ContainerButtonStyled, ContainerCardStyled, ImageButtonOverlay, ImageContainerCardStyled
} from './MainPageContent.styles';
import LoadingContext from '../../../context/LoadingContext';
import ErrorBreed from './ErrorBreed';

const MainPageContent = () => {
  const [,setIsLoading] = useContext(LoadingContext);
  // declarations and variables
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [breeds, setBreeds] = useState([]);
  const [data, setData] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [showError, setShowError] = useState(false);

  // useEffects and functions
  const getList = async() => {
    try {
      const response = await API.request("/images/search?" + new URLSearchParams({
        page: currentPage,
        limit: 8,
        breed_id: selectedBreed,
      }));
      if(response.length) {
        let newArray = [...data];
        newArray.push(...response);
        setData(newArray);
        setShowError(false);
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setTimeout(
        setIsLoading(false)
      , 5000)
    }

  };

  const getBreeds = async() => {
    const response = await API.request("/breeds");
    if(response) {
      setBreeds(response);
    }
    setTimeout(
      setIsLoading(false)
    , 5000)
  };

  useEffect(() => {
    getBreeds();
    const breed = new URLSearchParams(window.location.search).get("breed");
    if (breed) {
      setSelectedBreed(breed);
    }
  }, [])


  useEffect(() => {
    if(selectedBreed) {
      getList()
    }
  }, [selectedBreed, currentPage])

  return (
    <>
      <Form.Select
        onChange={(value) => {
          setIsLoading(true);
          setCurrentPage(0);
          setData([]);
          setSelectedBreed(value.currentTarget.value);
        }}
        style={{marginBottom: 20}}
        value={selectedBreed}
      >
        <option>Select Breed</option>
        {breeds.map((value) => {
          return <option value={value.id} key={value.id}>{value.name}</option>
        })}
      </Form.Select>
      {showError && (
        <Row>
          <ErrorBreed />
        </Row>
      )}

      <Row>
        {data.map((info, index)=> {
          return (
            <Col key={`${info.id}-${index}`} xs="6" md="3" style={{marginBottom: 20}}>
              <ContainerCardStyled style={{borderRadius: 10, position: 'relative'}}>
                <ImageContainerCardStyled style={{backgroundImage: `url(${info.url})`}} />
                <ImageButtonOverlay>
                  <ContainerButtonStyled
                    color={Colors.primary}
                    onClick={() => {
                      setIsLoading(true);
                      navigate(`/${info.id}`, { replace: true });
                    }}
                  >
                    See More
                  </ContainerButtonStyled>
                </ImageButtonOverlay>
              </ContainerCardStyled>
            </Col>
          )
        })}
        {(data.length && data.length % 8 === 0) && (
            <Button onClick={() => {
              setIsLoading(true);
              setCurrentPage(currentPage + 1)
            }}>
              Load More
            </Button>
          )
        }
      </Row>
    </>
  );
}

export default MainPageContent;