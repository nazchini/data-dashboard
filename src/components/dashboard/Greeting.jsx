import React from "react";
import styled from "styled-components";

export default function Greeting() {
  return (
    <Section>
      <div className="title">
        <h1>Hello George,</h1>
        <h2>
          Welcome to <span>YOUR DASHBOARD</span>
        </h2>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .title {
    h1 {
      font-size: 0.8rem;
    }
    h2 {
      font-size: 1rem;
      span {
        color: #4c8bf5;
      }
    }
  }
  @media screen and (min-width: 660px) {
    .title {
      h1 {
        font-size: 1.2rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;
