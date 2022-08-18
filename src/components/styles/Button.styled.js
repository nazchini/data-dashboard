import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 0.6rem 1em;
  cursor: pointer;
  background: none;
  border: #4c8bf5;
  border-radius: 1em;
  display: flex;
  gap: 1rem;
  font-size: 1em;
  text-align: center;
  &:hover {
    background-color: lightgray;
    color: #000;
  }
`;
