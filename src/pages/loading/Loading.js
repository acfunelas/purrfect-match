import React from 'react';
import { LoadingPageContainer } from './Loading.styles';

const LoadingPage = () => {
  return(
    <LoadingPageContainer>
      <img src="/images/loading.gif" />
      <h5>LOADING... PLEASE WAIT</h5>
    </LoadingPageContainer>
  )
}

export default LoadingPage;