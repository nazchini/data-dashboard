import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import ChartsContext from "../store/charts-context";
import { MdSpaceDashboard } from "react-icons/md";
import { FaShip } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiDeathSkull } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

export default function Sidebar() {
  const chartsCtx = useContext(ChartsContext);
  const [navbarState, setNavbarState] = useState(false);

  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .charts>ul>li:nth-of-type(1),
          .charts>ul>li:nth-of-type(2),
          .charts>ul>li:nth-of-type(3),
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  function updateChartView(chartName) {
    chartsCtx.updateCurrentChart(chartName);
    console.log({ chartName });
  }

  return (
    <>
      <Section>
        <div className="top">
          <div className="brand">
            <FaShip />
            <span>TITANIC</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="charts">
            <ul>
              <li
                className={
                  chartsCtx.currentChart === "table" ? "active" : "none"
                }
              >
                <button onClick={() => updateChartView("table")}>
                  <MdSpaceDashboard />
                  <span> Raw Data</span>
                </button>
              </li>
              <li
                className={
                  chartsCtx.currentChart === "line" ? "active" : "none"
                }
              >
                <button onClick={() => updateChartView("line")}>
                  <FaRegMoneyBillAlt />
                  <span> Age vs. Fare</span>
                </button>
              </li>
              <li
                className={chartsCtx.currentChart === "bar" ? "active" : "none"}
              >
                <button onClick={() => updateChartView("bar")}>
                  <GiDeathSkull />
                  <span> Survival vs. Class</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <ResponsiveNav state={navbarState} className={navbarState ? "show" : ""}>
        <div className="responsive__links">
          <ul>
            <li className={chartsCtx.currentChart === 1 ? "active" : "none"}>
              <button onClick={() => updateChartView("table")}>
                <MdSpaceDashboard />
                <span> Raw Data</span>
              </button>
            </li>
            <li className={chartsCtx.currentChart === 2 ? "active" : "none"}>
              <button onClick={() => updateChartView("line")}>
                <FaRegMoneyBillAlt />
                <span> Age vs. Fare</span>
              </button>
            </li>
            <li className={chartsCtx.currentChart === 3 ? "active" : "none"}>
              <button onClick={() => updateChartView("bar")}>
                <GiDeathSkull />
                <span> Survival vs. Class</span>
              </button>
            </li>
          </ul>
        </div>
      </ResponsiveNav>
    </>
  );
}
const Section = styled.section`
  position: fixed;
  left: 0;
  box-shadow: 0.2em 0 2em 0 #c8c8c8;
  height: 100vh;
  width: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
  gap: 2rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    .toggle {
      display: none;
    }
    .brand {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      svg {
        color: #4c8bf5;
        font-size: 2rem;
      }
      span {
        font-size: 2rem;
        color: #4c8bf5;
      }
    }
    .charts {
      display: flex;
      justify-content: center;
      ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li {
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;
          &:hover {
            background-color: #4c8bf5;
            button {
              color: #fff;
            }
          }
          button {
            cursor: pointer;
            background: none;
            border: none;
            display: flex;
            gap: 1rem;
            font-size: 1em;
          }
        }
        .active {
          background-color: #4c8bf5;
          button {
            color: #fff;
          }
        }
      }
    }
  }

  .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    position: initial;
    width: 100%;
    height: max-content;
    padding: 1rem;
    .top {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;
      .toggle {
        display: block;
        color: white;
        z-index: 99;
        svg {
          font-size: 1.4rem;
        }
      }
      .brand {
        gap: 1rem;
        justify-content: flex-start;
      }
    }
    .top > .links,
    .logout {
      display: none;
    }
  }
`;

const ResponsiveNav = styled.div`
  position: fixed;
  right: -10vw;
  top: 0;
  z-index: 10;
  background-color: black;
  height: 100vh;
  width: ${({ state }) => (state ? "60%" : "0%")};
  transition: 0.4s ease-in-out;
  display: flex;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;
  .responsive__links {
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-top: 3rem;
      li {
        padding: 0.6rem 1rem;
        border-radius: 0.6rem;
        &:hover {
          background-color: #ffc107;
          a {
            color: black;
          }
        }
        a {
          text-decoration: none;
          display: flex;
          gap: 1rem;
          color: white;
        }
      }
      .active {
        background-color: #ffc107;
        a {
          color: black;
        }
      }
    }
  }
`;
