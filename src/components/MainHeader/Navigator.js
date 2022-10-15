import React from "react";
import styles from "./Navigator.module.css";
const Navigator = (props) => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="/">users</a>
        </li>
        <li>
          <a href="/">admins</a>
        </li>
        <li>
          <button onClick={props.onClick}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
