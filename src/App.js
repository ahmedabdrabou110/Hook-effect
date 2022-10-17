import React, { useState , useEffect } from "react";
import AuthContext from "./components/auth/AuthContext";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Input from "./components/UI/Input/Input";

function App() {
  const [login, setLogin] = useState(true);

  // we need to check if in local storage exit isLoggedIn if exist don't return login page 


  // This is Error as it make an infinte loop so we use useEffect to control hwo re execution again
  // const loggedUserInformations = localStorage.getItem("isLoggedIn");

  // if(loggedUserInformations === "1" ) {
  //   setLogin(true);
  // }

  // using useEffect.

  useEffect(()=>{
    const loggedUserInformations = localStorage.getItem("isLoggedIn");
    if(loggedUserInformations === "1" ) setLogin(false);
  } ,[])

  const LogoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setLogin(true);
  };

  const loginHandler = (enteredEmail, enteredPassword) => {
    // make a local storage to save information of user to not need to login again

    localStorage.setItem("isLoggedIn" , "1");
    setLogin(false);
  };

  return (
    <AuthContext.Provider value={{
      isLoggedIn:login
    }}>
      <MainHeader  onClick={LogoutHandler} />
      {login && <Input  onLogin={loginHandler} />}
      {!login && <Home onLogout = {LogoutHandler}/>}
    </AuthContext.Provider>
  );
}

export default App;
