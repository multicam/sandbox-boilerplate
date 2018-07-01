import React from "react";
import "../style/style.scss";

import Hello from "../components/Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default () => (
  <div style={styles}>
    <Hello name="Multi" />
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);
