import React from 'react';

import MainContainer from './styles/MainContainer';


const Content = (props) => {
  return (
    <MainContainer>
      { props.children }
    </MainContainer>
  )
}
 
export default Content;
