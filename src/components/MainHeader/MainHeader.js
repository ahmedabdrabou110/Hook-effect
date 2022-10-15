import React from "react";
import styles from "./MainHeader.module.css";
import Navigator from "./Navigator";
const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>a typical page</h1>
      {!props.login && <Navigator onClick={props.onClick} />}
    </header>
  );
};

export default MainHeader;
