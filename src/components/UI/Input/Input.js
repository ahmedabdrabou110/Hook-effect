import React, { useState , useEffect} from "react";
import Button from "../Button/Button";

import Card from "../Card/Card";

import styles from "./Input.module.css";

const Input = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [valideForm, setValideForm] = useState(false);
  const [validateEmail, setValidateEmail] = useState();
  const [validatePassword, setvalidatePassword] = useState();

  // we use useEffect to make validate once for email and password depended on depensiences
  useEffect(()=>{
    let indentifier = setTimeout(()=>{
      console.log("Checking Form Validity!") ;
       setValideForm(
        enteredEmail.includes("@") && enteredPassword.length > 6
      );
    } , 500)

    // It's make a cleaner which before execution function almost once time 
    return ()=>{
      console.log("CLEANERUP");
      clearTimeout(indentifier);
    };
  },[enteredEmail , enteredPassword])

  const changeEmailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const validateEmailHandler = (event) => {
    setValidateEmail(event.target.value.includes("@"));
  };

  const validatePasswordHandler = (event) => {
    setvalidatePassword(event.target.value.length > 6);
  };

  const changePasswordHandler = (event) => {
    setEnteredPassword(event.target.value);
    
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
