import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Header = styled.header`
  max-width: 1200px;
  height: 712px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: absolute;
  
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
`;

export const BelongContainer = styled.div`
  width: 100%;
  height: 80%;
  margin-right: -15px;
  margin-left: -15px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    width: 100%;
    min-height: 1050px;
  }
`;