import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  text-align: center;
  margin: 10px 0;
  color: #fff;

  .booking {
    background-color: ${props => props.theme.primary};
    text-align: center;
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 30px;
  }

  .container-booking {
    width: 100%;
  }

  @media screen and (max-width: 376px) {
    .booking {
      font-size: 20px;
      text-align: left;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: inherit;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  background-color: rgba(250,250,250,0.1);
  transition: all 0.6s;
  
  :hover {
    background-color: ${props => props.theme.secondary};
    color: #000;
  }
  
  
`;

export const Icon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  background-color: rgba(250,250,250,0.3);
  height: 60px;
  width: 60px;
  font-size: 36px;

  img {
    width: 75px;
  }
`;