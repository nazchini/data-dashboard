import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = require("../../../assets/titanic.json");
const ageSorted = data.sort((a, b) => a.Age - b.Age);
const sortedByAge = ageSorted.filter((item) => parseInt(item.Age) > 0);
const passengers = [
  ...new Map(sortedByAge.map((item) => [item["Age"], item])).values(),
];

export default function Linechart() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return (
    <Section>
      <h1>Age vs. Fare</h1>
      <p>
        A line chart that shows the relationship between the age of the
        passengers aboard Titanic and the fare they paid
      </p>
      <ResponsiveContainer
        className="chart"
        width="90%"
        aspect={`${isMobile ? 1 : 3}`}
      >
        <LineChart width={500} height={300} data={passengers}>
          <CartesianGrid
            horizontal="true"
            vertical=""
            stroke="lightgray"
            strokeDasharray={5}
          />
          <XAxis
            dataKey="Age"
            interval={"preserveStartEnd"}
            tick={{ fill: "grey" }}
          />
          <YAxis tick={{ fill: "gray" }}></YAxis>
          <Legend />
          <Tooltip
            contentStyle={{ backgroundColor: "#4c8bf5", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            cursor={false}
          />
          <Line
            dataKey="Fare"
            stroke="black"
            dot={{ r: 2, stroke: "gray" }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  p {
    width: 70%;
    margin: 1em auto;
  }
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  padding: 2rem 0 0 0;
  }

  .chart {
    margin: 0 auto;
    padding-bottom: 1em;
  }
   h1 {
      font-size: 1rem;
    }

    p {
      font-size: 0.625rem;
    }

  @media screen and (min-width: 660px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
