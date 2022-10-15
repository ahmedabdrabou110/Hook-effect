import React, { useState } from "react";
import Button from "../Button/Button";

import Card from "../Card/Card";

import styles from "./Input.module.css";

const Input = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [valideForm, setValideForm] = useState(false);
  const [validateEmail, setValidateEmail] = useState();
  const [validatePassword, setvalidatePassword] = useState();

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
    setValideForm(
      event.target.value.includes("@") && enteredPassword.length > 6
    );
  };

  const validateEmailHandler = (event) => {
    setValidateEmail(event.target.value.includes("@"));
  };

  const validatePasswordHandler = (event) => {
    setvalidatePassword(event.target.value.length > 6);
  };

  const changePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    setValideForm(event.target.value.length > 6 && enteredEmail.includes("@"));
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    console.log(enteredEmail, enteredPassword);
    props.onLogin(enteredEmail, enteredPassword);
    setEnteredEmail("");
    setEnteredPassword("");
    console.log(props.login);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitFormHandler}>
        <div
          className={`${styles.control} ${
            validateEmail === false ? styles.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="text"
            value={enteredEmail}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${
            validatePassword === false ? styles.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            value={enteredPassword}
            onChange={changePasswordHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" disable={!valideForm}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Input;
