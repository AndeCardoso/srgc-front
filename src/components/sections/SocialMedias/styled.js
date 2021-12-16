import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  text-align: left;
  margin-left: auto;
  padding-left: auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items:center;
  background-color: rgba(0,0,0,0.5);
  padding-right: 100px;
  margin-left: -100vh;
  padding-left: 100vh;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 580px;
    margin: 0;
    padding: 0;
  }
`;

export const Logo = styled.div`
  margin-top: 70px;
  
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    color: ${props => props.theme.secondary};
  }

  @media screen and (max-width: 368px) {
    width: 90%;
    margin-top: 50px;
  }
`;

export const Social = styled.div`
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;

export const SectionTitle = styled.div`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 0;
`;


export const Contact = styled.div`
  display: flex;
  justify-self: end;

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
