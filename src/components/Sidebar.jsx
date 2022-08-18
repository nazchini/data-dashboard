import ChartOptions from "./ChartOptions";
import classes from "./styles/Sidebar.module.css";
import { FaShip } from "react-icons/fa";

export default function Sidebar() {
  return (
    <section class={classes.sidebar}>
      <div className={classes.container}>
        <div className={classes.logo}>
          <FaShip />
          <span>TITANIC</span>
        </div>
        <ChartOptions />
      </div>
    </section>
  );
}
