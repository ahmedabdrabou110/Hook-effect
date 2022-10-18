import React, { useContext } from "react";
import AuthContext from "../auth/AuthContext";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";

import styles from "./Home.module.css";

const Home = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <Card className={styles.home}>
      <h1>Welcome Back !</h1>
      <Button onClick={authCtx.onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
