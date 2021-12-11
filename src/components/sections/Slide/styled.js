import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
  ul{
    cursor: inherit;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    min-height: 930px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    height: 130vh;
  }
`