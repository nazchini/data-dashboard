import { createContext, useState } from "react";

const ChartsContext = createContext({
  currentChart: "line",
  updateCurrentChart: (chart) => {},
});

export function ChartsContextProvider(props) {
  const [chart, setChart] = useState("line");

  function updateChart(chartSelected) {
    setChart((prevChart) => {
      if (prevChart !== chartSelected) {
        return chartSelected;
      }
    });
  }

  const context = {
    currentChart: chart,
    updateCurrentChart: updateChart,
  };

  return (
    <ChartsContext.Provider value={context}>
      {props.children}
    </ChartsContext.Provider>
  );
}

export default ChartsContext;
