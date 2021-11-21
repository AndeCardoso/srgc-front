import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Section = styled.section`
  width: 500px;
  background-color: rgba(250,250,250,0.90);
  padding: 40px;
`;

export const Title = styled.h3`
  width: 100%;
  font-size: 24px;
  font-weight: 700px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: solid 2px #dbdada;
`;

export const Form = styled.div`
  width: 100%;
  display: block;

  .standart{
    margin-left: 10px;
  }

  .email {
    width: 95%;
  }
`;

export const TopInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;