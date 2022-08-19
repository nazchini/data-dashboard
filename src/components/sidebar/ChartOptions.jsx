import React, { useContext } from "react";
import ChartsContext from "../../store/charts-context";
import { Button } from "../styles/Button.styled";
import classes from "../styles/ChartOptions.module.css";

import { MdSpaceDashboard } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiDeathSkull } from "react-icons/gi";

export default function ChartOptions() {
  // Which chart option is selected from the sidebar options? Since more than one component depends on this information, we will manage this state available globally using React's useContext Hook
  const chartsCtx = useContext(ChartsContext);
  function updateChartView(chartName) {
    chartsCtx.updateCurrentChart(chartName);
  }

  return (
    <div className={classes.chart}>
      <ul>
        <li
          className={
            chartsCtx.currentChart === "table" ? classes.active : "none"
          }
        >
          <Button onClick={() => updateChartView("table")}>
            <MdSpaceDashboard />
            <span> Raw Data</span>
          </Button>
        </li>
        <li
          className={
            chartsCtx.currentChart === "line" ? classes.active : "none"
          }
        >
          <Button onClick={() => updateChartView("line")}>
            <FaRegMoneyBillAlt />
            <span> Age vs. Fare</span>
          </Button>
        </li>
        <li
          className={chartsCtx.currentChart === "bar" ? classes.active : "none"}
        >
          <Button onClick={() => updateChartView("bar")}>
            <GiDeathSkull />
            <span> Survival vs. Class</span>
          </Button>
        </li>
      </ul>
    </div>
  );
}
