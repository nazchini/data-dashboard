import React from "react";
import styled from "styled-components";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <Div>
      <Sidebar />
      <Dashboard />
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 765px) {
    flex-direction: row;
  }
`;
