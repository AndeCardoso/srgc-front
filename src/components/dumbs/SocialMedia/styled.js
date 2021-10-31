import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  text-align: center;
  margin: 10px 0;
  transition: all 0.5s;

  :hover {
    background-color: rgba(250,250,250,0.5);
  }
`;

export const Link = styled.a`
  display: inline-block;
  transition: all 0.5s;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  width: 100%;
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  background-color: rgba(250,250,250,0.1);
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
`;