import React, { useState, useEffect } from "react";
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
  Survived: data.filter(
    (person) => person.Pclass === 1 && person.Survived === 1
  ).length,
  "Did not survive": data.filter(
    (person) => person.Pclass === 1 && person.Survived === 0
  ).length,
};

const secondClass = {
  Pclass: "Second class",
  Survived: data.filter(
    (person) => person.Pclass === 2 && person.Survived === 1
  ).length,
  "Did not survive": data.filter(
    (person) => person.Pclass === 2 && person.Survived === 0
  ).length,
};
const thirdClass = {
  Pclass: "Third class",
  Survived: data.filter(
    (person) => person.Pclass === 3 && person.Survived === 1
  ).length,
  "Did not survive": data.filter(
    (person) => person.Pclass === 3 && person.Survived === 0
  ).length,
};
const survivorsByClass = [firstClass, secondClass, thirdClass];

export default function Barchart() {
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
      <h1>Survival vs. Class</h1>
      <p>The total number of survivals per passenger class</p>
      <ResponsiveContainer
        className="chart"
        width="70%"
        aspect={`${isMobile ? 0.8 : 2}`}
      >
        <BarChart data={survivorsByClass}>
          <CartesianGrid />
          <XAxis dataKey="Pclass" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Survived" stackId="a" fill="#4c8bf5" />
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
    font-size: 0.625rem;
  }

   h1 {
      font-size: 1rem;
    }

  .chart {
    margin: 0 auto;
    padding-bottom: 1em;
  }

  -webkit-box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  box-shadow: 0px 0px 10px 10px rgba(208, 208, 208, 0.5);
  padding: 2rem 0 0 0;
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
