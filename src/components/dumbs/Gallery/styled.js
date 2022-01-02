import styled from "styled-components";

export const CarouselContainer = styled.div`
  width: 750px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 15px;
  
  @media screen and (max-width: 1025px) {
    width: 100%;
    margin-left: 0;
  }
`;
