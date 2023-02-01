import React from 'react'
import styled from 'styled-components';
import Listings from '../components/Listings';

const Container = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
     width: 100%;
    height: fit-content;
    `;

function Home() {
  return (
    <Container>
<Listings/>
    </Container>
   
  )
}

export default Home