import styled from 'styled-components';
import Listings from '../components/Listings';

const Container = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
     width: 100%;
    height: fit-content;
    background: linear-gradient(90deg, #02345A, #008793, #00bf72);
    `;

const MainTitle = styled.h1`
    color: #fffffff5;
`;

function Home() {
  return (
    <Container>
      <MainTitle>Hacker News List</MainTitle>
<Listings/>
    </Container>
   
  )
}

export default Home