import React , {useContext} from "react";
import AuthContext from "../auth/AuthContext";
import styles from "./MainHeader.module.css";
import Navigator from "./Navigator";
const MainHeader = () => {

    const ctx = useContext(AuthContext);
    
    return (
      <header className={styles["main-header"]}>
        <h1>a typical page</h1>
        {!ctx.isLoggedIn && <Navigator onClick={ctx.onLogout} />}
      </header>
    );
  }
      


export default MainHeader;
