import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  background-color: #00172A;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  color:#C2E0FD;

  @media (max-width: 600px) {
    font-size:14px;
    padding: 20px;
  }
`;

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;

  @media (max-width: 600px) {
    font-size:14px;
    padding: 10px;
  }
`;
