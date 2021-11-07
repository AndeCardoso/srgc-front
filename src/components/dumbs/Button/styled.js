import styled from "styled-components";

export const Container = styled.div`
  button {
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