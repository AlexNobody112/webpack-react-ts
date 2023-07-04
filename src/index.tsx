import { someFn } from "./test";
import { render } from "react-dom";
import classes from "./styles.module.scss";

someFn(1);

render(
  <div className={classes.color}>skdjbfkdsjfn</div>,
  document.getElementById("root")
);
