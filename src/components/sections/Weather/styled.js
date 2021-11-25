import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 100px 0;
  

  iframe {
    width: 75%;
    height: 430px;
    background-color: ${props => props.theme.primary};
    border: none;
    overflow-x: scroll;
  }

  @media screen and (max-width: 1024px) {
    iframe {
      height: 430px;
    }
  }

  @media screen and (max-width: 768px) {
    height: 50%;
    iframe {
      height: 420px;
    }
  }
`;