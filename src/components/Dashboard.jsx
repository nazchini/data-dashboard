import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Linechart from "./LineChart";
import Barchart from "./BarChart";
import ChartsContext from "../store/charts-context";
import scrollreveal from "scrollreveal";

export default function Dashboard() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
    `,
      {
        opacity: 0,
        interval: 100,
      }
    );
  }, []);

  const chartsCtx = useContext(ChartsContext);

  return (
    <>
      <Section>
        <Navbar />
        <div className="flex">
          {chartsCtx.currentChart === "line" && <Linechart />}
          {chartsCtx.currentChart === "bar" && <Barchart />}
        </div>
      </Section>
    </>
  );
}

const Section = styled.section`
  margin-left: 18vw;
  padding: 2rem;
  height: 100%;
  .flex {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin-left: 0;
    }
  }
`;
