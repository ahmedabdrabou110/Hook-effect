import React, { useContext } from "react";
import AuthContext from "./components/auth/AuthContext";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";


const App = ()=> {
  // const [login, setLogin] = useState(true);

  // we need to check if in local storage exit isLoggedIn if exist don't return login page 


  // This is Error as it make an infinte loop so we use useEffect to control hwo re execution again
  // const loggedUserInformations = localStorage.getItem("isLoggedIn");

  // if(loggedUserInformations === "1" ) {
  //   setLogin(true);
  // }

  // using useEffect.

  // useEffect(()=>{
  //   const loggedUserInformations = localStorage.getItem("isLoggedIn");
  //   if(loggedUserInformations === "1" ) setLogin(false);
  // } ,[])

  // const LogoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn")
  //   setLogin(true);
  // };

  // const loginHandler = (enteredEmail, enteredPassword) => {
  //   // make a local storage to save information of user to not need to login again

  //   localStorage.setItem("isLoggedIn" , "1");
  //   setLogin(false);
  // };

  const authCtx = useContext(AuthContext);

  return (
    <>
      <MainHeader  />
      {authCtx.isLoggedIn && <Login />}
      {!authCtx.isLoggedIn && <Home />}
    </>
  );
}

export default App;
