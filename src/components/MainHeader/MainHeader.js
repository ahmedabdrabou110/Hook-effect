import React from "react";
import AuthContext from "../auth/AuthContext";
import styles from "./MainHeader.module.css";
import Navigator from "./Navigator";
const MainHeader = (props) => {
  return (
    <AuthContext.Consumer>
      {
        (ctx) => {
          return (
          <header className={styles["main-header"]}>
            <h1>a typical page</h1>
            {!ctx.isLoggedIn && <Navigator onClick={props.onClick} />}
          </header>
        );
        }
      }
    
    </AuthContext.Consumer>
  );
};

export default MainHeader;
