/*Loader: display loading animation while stories are loading*/
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;

const LoaderIcon = styled.div`
    border: 1px solid rgba(255,255,255,0.4); 
    box-shadow: 30px yellow;
    backdrop-filter: blur(5px);
    border-radius: 10px;
    width: 80px;
    height: 80px;
    animation: spin 4s linear infinite;
  
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    overflow: hidden;
      &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #ffffff;
      opacity: 30%;
      animation: glare 1s linear infinite;

    @keyframes glare {
      0% { transform: skewX(65deg) translateX(-350px); }
      100% { transform: skewX(65deg) translateX(2000px); }
    }
    }
 `;

function Loader() {
  return (
    <Container>
      <LoaderIcon />
      <LoaderIcon />
      <LoaderIcon />
      <LoaderIcon />
    </Container>

  )
}

export default Loader