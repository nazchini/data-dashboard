import React, { useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Table from "./charts/Table";
import Linechart from "./charts/LineChart";
import Barchart from "./charts/BarChart";
import ChartsContext from "../store/charts-context";

export default function Dashboard() {
  const chartsCtx = useContext(ChartsContext);

  return (
    <>
      <Section>
        <Navbar />
        <div className="flex">
          {chartsCtx.currentChart === "table" && <Table />}
          {chartsCtx.currentChart === "line" && <Linechart />}
          {chartsCtx.currentChart === "bar" && <Barchart />}
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  padding: 2rem;
  height: 100%;
  width: 100%;
  .flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 660px) {
    
    }
  }
`;
