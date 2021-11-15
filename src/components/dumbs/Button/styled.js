import styled from "styled-components";

export const Container = styled.div`
  .standart {
    margin-top: 15px;
    width: 100%;
    height: 36px;
    background-color: ${props => props.theme.secondary};
    font-size: 13px;
    color: #121212;
    font-weight: 600;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const Item = styled.li`
  display: block;
  text-align: center;
  margin: 8px 0px;

  

  button {
    display: block;
    transition: all 0.5s;
    text-align: left;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    display: inline-block;
    width: 100%;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme.primary};
  }

  button:hover {
    background-color: ${props => props.theme.secondary};
    color: #000;
  }
  
  button:focus {
    background-color: ${props => props.theme.secondary};
    color: #000;
  }

  i {
    float: right;
    background-color: rgba(250,250,250,0.2);
    height: 60px;
    width: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 36px;
  }
`;