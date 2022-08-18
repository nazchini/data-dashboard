import React from "react";
import styled from "styled-components";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/sidebar/Sidebar";

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
