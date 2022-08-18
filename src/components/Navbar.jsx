import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Nav>
      <div className="title">
        <h4>Hello George,</h4>
        <h1>
          Welcome to <span>YOUR DASHBOARD</span>
        </h1>
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  .title {
    h1 {
      span {
        color: #4c8bf5;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    .title {
      h1 {
        span {
          display: block;

          margin: 1rem 0;
          /* letter-spacing: 0; */
        }
      }
    }
  }
`;
