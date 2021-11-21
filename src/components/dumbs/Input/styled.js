import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin-bottom: 10px;
    width: 90%;
    height: 36px;
    border: none;
    background-color: #ddd;
    font-size: 16px;
    font-weight: 700px;
    color: #000;
    padding-left: 15px;
  }

  label {
    width: 90%;
    margin-top: 10px;
    font-size: 14px;
    text-transform: uppercase;
    color: #121212;
    font-weight: bold;
  }
`