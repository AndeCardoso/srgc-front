import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: #1f3646;
  padding: 60px 0px;
`;

export const Top = styled.div`
  text-decoration: none;
  margin-top: 15px;
  margin-bottom: 40px;
  width: auto;
  padding: 0 18px;
  height: 36px;
  background-color: #ffe165;
  font-size: 13px;
  color: #121212;
  font-weight: 600;
  display: inline-block;
  text-align: center;
  line-height: 36px;
`;

export const SocialMedias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Icon = styled.li`
  margin: 0px 3px;

  a{
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 80px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  background-color: #364a59;
  transition: all 0.5s;
  }
`;

export const CopyRight = styled.div`
  width: 100%;

  p {
    color: #fff;
    font-size: 12px;
    margin-top: 40px;
  }
`;