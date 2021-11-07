import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  text-align: left;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  margin-left: -100vh;
  padding-left: 100vh;
`;

export const Social = styled.div`
  padding-right: 100px;
`;

export const Title = styled.h3`
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

export const Logo = styled.div`
  img {
    padding-top: 60px;
    max-width: 250px;
  }
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
