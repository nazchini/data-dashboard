import styled from "styled-components";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const data = require("../../../assets/titanic.json");

const firstClass = {
  Pclass: "First class",
  Survived: 0,
  "Did not survive": 0,
};
const secondClass = {
  Pclass: "Second class",
  Survived: 0,
  "Did not survive": 0,
};
const thirdClass = {
  Pclass: "Third class",
  Survived: 0,
  "Did not survive": 0,
};

for (let person of data) {
  if (person.Pclass === 1) {
    person.Survived === 1
      ? (firstClass.Survived += 1)
      : (firstClass["Did not survive"] += 1);
  } else if (person.Pclass === 2) {
    person.Survived === 1
      ? (secondClass.Survived += 1)
      : (secondClass["Did not survive"] += 1);
  } else {
    person.Survived === 1
      ? (thirdClass.Survived += 1)
      : (thirdClass["Did not survive"] += 1);
  }
}
const survivorsByClass = [firstClass, secondClass, thirdClass];

export default function Barchart() {
  return (
    <Section>
      <h1>Survival vs. Class</h1>
      <p>The total number of survivals per passenger class</p>
      <ResponsiveContainer width="70%" aspect={2}>
        <BarChart
          data={survivorsByClass}
          margin={{ top: 60, left: 400, right: 0, bottom: 50 }}
        >
          <CartesianGrid />
          <XAxis dataKey="Pclass" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Survived" stackId="a" fill="  #4c8bf5" />
          <Bar dataKey="Did not survive" stackId="a" fill="#c4342d" />
        </BarChart>
      </ResponsiveContainer>
    </Section>
  );
}

const Section = styled.section`
  text-align: center;
  border-radius: 1rem;
  p {
    width: 70%;
    margin: 1em auto;
  }
  -webkit-box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  padding: 2rem 0 0 0;
  }
`;
