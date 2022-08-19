import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  padding: 0.6rem 1em;
  cursor: pointer;
  background: none;
  border: #4c8bf5;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.8rem;
  text-align: left;

  svg {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 660px) {
    font-size: 1.2rem;
    border-radius: 1em;
    svg {
      font-size: 1.5rem;
    }
  }
`;
