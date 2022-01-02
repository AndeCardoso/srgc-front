import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: #555;

  h1 {
    margin-top: 50px;
    align-items: center;
    font-size: 40px;
    color: #fff;
  }
  
  p {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
  }

  svg {
    color: #fff;
  }

  div {
    margin-top: 40px;
    display: flex;
    align-items: baseline;
  }
`;

export const Loading = styled.div`

 span {
  display: inline-block;
  vertical-align: middle;
  width: 5px;
  height: 5px;
  margin: 2px;
  background: #fff;
  border-radius: 50px;
  animation: loading 1s infinite alternate;
}

 span:nth-of-type(2) {
  background: #fff;
  animation-delay: 0.2s;
}
 span:nth-of-type(3) {
  background: #fff;
  animation-delay: 0.4s;
}

@keyframes loading {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`;

export const Logo = styled.img`
  margin-top: 70px;
  width: 180px;
  filter: brightness(100);
`;