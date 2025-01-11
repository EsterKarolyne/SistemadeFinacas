import styled from "styled-components";

export const TableLine = styled.tr`
`;


export const TableColumn = styled.td`
  padding: 10px 0;
  position: relative;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
  font-weight: 700;

  @media (max-width: 600px) {
    font-size:14px;
  }
`;
export const Button = styled.button<{}>`
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: transparent;
  position: absolute;
  top: 0;
  right: 0;

  @media (max-width: 600px) {
    font-size:14px;
  }
`;

export const Image = styled.img<{}>`
  width:30px;
`;
export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
`;
