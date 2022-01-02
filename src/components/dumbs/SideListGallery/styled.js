import styled from "styled-components";

export const SideList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  width: 360px;
  
  @media screen and (max-width: 1025px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;

  @media screen and (max-width: 1025px) {
    flex-direction: column;
    width: 100%;
  }
`;