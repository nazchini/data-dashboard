import styled from "styled-components";

export const ChartOptionsStyles = styled.div`
  margin-top: 1em;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
  }

  li {
    width: 100%;
    border-radius: 1em;
  }
  .active {
    background-color: #4c8bf5;
    button {
      color: #fff;
    }
  }

  li > .active > button {
    color: #fff;
  }
  @media screen and (min-width: 660px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 2em;
    border-bottom: 0.5px solid gray;
  }
`;
