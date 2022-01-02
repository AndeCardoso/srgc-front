import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.primary};
  padding: 60px 0px;
`;

export const Top = styled.div`
  a {
    width: 100%;
    height: 100%;
    text-decoration: none;
    margin-top: 15px;
    margin-bottom: 40px;
    width: auto;
    padding: 0 18px;
    height: 36px;
    background-color: ${props => props.theme.secondary};
    font-size: 13px;
    color: #121212;
    font-weight: 600;
    display: inline-block;
    text-align: center;
    line-height: 36px;
  }
`;

export const SocialMedias = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const Icon = styled.li`
  margin: 3px;

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
  background-color: rgba(250,250,250,0.1);
  transition: all 0.5s;
  }

  a:hover {
    background-color: ${props => props.theme.secondary};
    color: #000;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  margin-top: 40px;

  p {
    color: #fff;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;

export const Infos = styled.div`
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: #fff;
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    
    p {
      font-size: 11px;
    }
  }
`;

export const Developer = styled.div`
  width: 100%;
  margin-top: 40px;

  p {
    color: #fff;
    font-size: 12px;
    margin-bottom: 5px;
  }
`;