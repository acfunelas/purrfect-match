import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import API from '../../../helpers/API'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  ImageContainerCardStyled,
  ImageButtonOverlay,
  ContainerCardStyled,
  ContainerButtonStyled,
} from './MainPageComponents.styled';
import Colors from '../../../themes/colors'
import Card from 'react-bootstrap/Card';

const MainPageContent = () => {
  const [breeds, setBreeds] = useState([]);
  const [data, setData] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  // useEffects
  useEffect(() => {
    const getBreeds = async() => {
      const response = await API.request("https://api.thecatapi.com/v1/breeds");
      if(response) {
        setBreeds(response);
      }
    };
    getBreeds();
  }, [])

  useEffect(() => {
    if(selectedBreed) {
      const getList = async() => {
        const response = await API.request("https://api.thecatapi.com/v1/images/search?" + new URLSearchParams({
          page: currentPage,
          limit: 7,
          breed_id: selectedBreed,
        }));

        if(response) {
          setData(response);
        }
      };
      getList();
    }

  }, [selectedBreed])

  return (
    <>
      <Form.Select
        onChange={(value) => {
          setCurrentPage(0);
          setSelectedBreed(value.currentTarget.value);
        }}
        style={{marginBottom: 20}}
      >
        <option>Select Breed</option>
        {breeds.map((value) => {
          return <option value={value.id} key={value.id}>{value.name}</option>
        })}
      </Form.Select>
      <Row>
        {data.map((info)=> {
          return (
            <Col key={info.id} xs="6" md="3" style={{marginBottom: 20}}>
              <ContainerCardStyled style={{borderRadius: 10, position: 'relative'}}>
                <ImageContainerCardStyled style={{backgroundImage: `url(${info.url})`}} />
                <ImageButtonOverlay>
                  <ContainerButtonStyled color={Colors.primary}>
                    See More
                  </ContainerButtonStyled>
                </ImageButtonOverlay>
              </ContainerCardStyled>
            </Col>
          )
        })}
        { (data.length && data.length % 7 === 0) && (
            <Col xs="6" md="3" style={{marginBottom: 20}}>
              <Card style={{borderRadius: 10}}>
                <Button>
                  Load More
                </Button>
              </Card>
            </Col>
          )
        }
      </Row>
    </>
  );
}

export default MainPageContent;