import React from "react";
import styled from "styled-components";
import { cardStyles } from "./ReusableStyles";
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

const data = require("../assets/titanic.json");
const ageSorted = data.sort((a, b) => a.Age - b.Age);

export default function Linechart() {
  return (
    <Section>
      <div className="chart">
        <ResponsiveContainer width="90%" aspect={1}>
          <LineChart
            data={ageSorted}
            margin={{ top: 20, left: 20, right: 20, bottom: 50 }}
          >
            {/* <CartesianGrid /> */}
            <XAxis dataKey="Age" interval={"preserveStartEnd"} />
            <YAxis></YAxis>
            <Legend />
            <Tooltip />
            <Line dataKey="Fare" stroke="black" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyles}
  padding: 2rem 0 0 0;

  .chart {
    height: 70%;
    }
  }
`;
