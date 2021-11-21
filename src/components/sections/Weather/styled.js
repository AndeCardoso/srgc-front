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
    height: 440px;
    background-color: ${props => props.theme.primary};
    border: none;
  }
`;