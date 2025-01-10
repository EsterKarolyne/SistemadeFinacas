import styled from "styled-components";

export const Container = styled.div`
  background-color: #00172A;
  color:#C2E0FD;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const InputLabel = styled.label`
  margin: 0 5px 0 5px;
  flex: 1;
`;

export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  cursor: pointer;
  font-weight: 700;
  
  &:hover {
    background-color: blue;
    color: white;
     background-color: #00172A;
  color:#C2E0FD;
  }
`;
