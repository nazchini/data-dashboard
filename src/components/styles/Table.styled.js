import styled from "styled-components";

export const TableStyles = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 0.6rem;
  th,
  td {
    border: 1px solid #ffffff;
    text-align: left;
    padding: 3px;
  }

  th {
    background-color: rgb(117, 201, 250);
  }

  td {
    background-color: rgb(205, 235, 253);
  }

  @media screen and (min-width: 660px) {
    font-size: 1rem;
    td {
      padding: 8px;
    }
  }
`;
