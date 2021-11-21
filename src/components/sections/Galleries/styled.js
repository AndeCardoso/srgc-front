import styled from "styled-components";

export const Section = styled.section`
  margin: 100px 0;
  background-color: #f4f4f4;
  padding: 80px 0px;
  
`;

export const Wrapper = styled.div`
  width: 1200px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled.h3`
  margin-top: 0px;
  margin-bottom: 60px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
  font-weight: 900;
  color: ${props => props.theme.primary};
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  
`;

export const SideList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  list-style: none;
  width: 360px;
`;

export const Item = styled.li`
  display: block;
  text-align: center;
  margin: 8px 0px;

  a {
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
    background-color: ${props => props.theme.primary};
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

export const CarouselContainer = styled.div`
  width: 750px;
  height: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`;