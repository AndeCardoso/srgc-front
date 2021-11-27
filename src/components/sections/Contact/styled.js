import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 800px;
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 60%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(250,250,250,0.90);

  @media screen and (max-width: 1024px) {
    width: 90%;
    height: 90%;
  }
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 700px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: solid 2px #dbdada;
  @media screen and (max-width: 426px) {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const Form = styled.div`
  width: 100%;
  display: block;

  .standard{
    margin-left: 10px;
  }

  .email {
    width: 95%;
  }
  
  @media screen and (max-width: 426px) {
    .email {
      width: 90%;
    }
  }
`;

export const TopInputs = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 426px) {
    flex-direction: column;
  }
`;