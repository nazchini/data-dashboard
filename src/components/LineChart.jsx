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

const data = require("../assets/titanic.json");
const ageSorted = data.sort((a, b) => a.Age - b.Age);

export default function Linechart() {
  return (
    <Section>
      <h1>Age vs. Fare Chart</h1>
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
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  padding: 2rem 0 0 0;
  }
`;
