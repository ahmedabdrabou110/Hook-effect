import React, { useState , useEffect  , useReducer, useContext} from "react";
import AuthContext from "../auth/AuthContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input" 
import styles from "./Login.module.css";


// import styles from "./Login.module.css";

// email Reducer 
const emailReducer = (state , action) =>{
  // in use input case
  if(action.type === "USER_INPUT") {
     return {value : action.val , isvalid:action.val.includes("@")}
  }

  // in blur of form case
  if(action.type === "USER_BLUR"){
    return {value : state.value , isvalid:state.value.includes("@")}
  }

  if(action.type === "RESET_FORM") {
    return {value : action.val , isvalid : null}
  }
  return {value : "" , isvalid : null}
}


// password Reducer 

const passwordReducer =(state , action) =>{
  if(action.type === "USER_INPUT"){
    return {value  : action.val , isvalid : action.val.length > 6}
  }

  if(action.type === "USER_BLUR") {
    return {value : state.value , isvalid : state.value.length > 6}
  }

  if(action.type === "RESET_FORM") {
    return {value : action.val , isvalid : null}
  }

  return {value :"" , isvalid : null}
}

const Login = (props) => {

  const [emailState , dispatchEmail] = useReducer(emailReducer , {value:"" , isValid:null});
  const [passwordState , dispatchPassword] = useReducer(passwordReducer , {value :"" , isvalid:null})

  const authCtx = useContext(AuthContext);
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [validateEmail, setValidateEmail] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [validatePassword, setvalidatePassword] = useState();
  const [valideForm, setValideForm] = useState(false);

  // we use useEffect to make validate once for email and password depended on depensiences
  useEffect(()=>{
    let indentifier = setTimeout(()=>{
      console.log("Checking Form Validity!") ;
       setValideForm(
        emailState.isvalid && passwordState.isvalid 
      );
    } , 500)

    // It's make a cleaner which before execution function almost once time 
    return ()=>{
      console.log("CLEANERUP");
      clearTimeout(indentifier);
    };
  },[emailState.isvalid , passwordState.isvalid])

  const changeEmailHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({type:"USER_INPUT" , val : event.target.value});
  };

  const validateEmailHandler = () => {
    // setValidateEmail(event.target.value.includes("@"));
    dispatchEmail({type:"USER_BLUR"});
  };

  const validatePasswordHandler = () => {
    // setvalidatePassword(event.target.value.length > 6);
    dispatchPassword({type:"USER_BLUR"});
  };

  const changePasswordHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({type:"USER_INPUT" , val : event.target.value});
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    // props.onLogin(enteredEmail, enteredPassword);
    // console.log(enteredEmail, enteredPassword);
    authCtx.onLogin(emailState.value, passwordState.value);
    // setEnteredEmail("");
    dispatchEmail({type : "RESET_FORM" , val:""});
    dispatchPassword({type : "RESET_FORM" , val:""});
    // setEnteredPassword("");
    console.log(props.login);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitFormHandler}>
        {/* <div
          className={`${styles.control} ${
            emailState.isvalid === false ? styles.invalid : ""
          }`}
        >
          <label>E-Mail</label>
          <input
            type="text"
            value={emailState.value}
            onChange={changeEmailHandler}
            onBlur={validateEmailHandler}
          />
        </div> */}
        <Input isvalid={emailState.isvalid} id="email" label= "E-Mail" type="email" value={emailState.value} onChange={changeEmailHandler} onBlur={validateEmailHandler}  />
        {/* <div
          className={`${styles.control} ${
            passwordState.isvalid === false ? styles.invalid : ""
          }`}
        >
          <label>Password</label>
          <input
            type="password"
            value={passwordState.value}
            onChange={changePasswordHandler}
            onBlur={validatePasswordHandler}
          />
        </div> */}
        <Input isvalid={passwordState.isvalid} id="password" label="Password" type="password" value ={passwordState.value} onChange={changePasswordHandler} onBlur={validatePasswordHandler} />
        <div className={styles.actions}>
          <Button type="submit" disable={!valideForm}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
