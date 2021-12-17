import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Section = styled.section`
  width: 100%;
  height: 60%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 140px;
  background-color: rgba(250,250,250,0.90);

  @media screen and (max-width: 1024px) {
    width: 90%;
    min-height: 340px;
    padding: 20px;
    margin-top: 30px;
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
    height: 100%;

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

export const Contact = styled.div`
  display: flex;

  svg {
    margin-right: 10px;
    align-self: center;
  }

  a {
    display: inline-block;
    line-height: 60px;
    width: 270px;
    height: 60px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background-color: ${props => props.theme.secondary};
    font-size: 18px;
    font-weight: 700;
    color: #121212;
    text-align: center;
    text-decoration: none;
    letter-spacing: 0px;
  }
`;