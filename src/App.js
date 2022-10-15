import React, { useState } from "react";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Input from "./components/UI/Input/Input";

function App() {
  const [login, setLogin] = useState(true);

  const LogoutHandler = () => {
    setLogin(true);
  };

  const loginHandler = (enteredEmail, enteredPassword) => {
    setLogin(false);
  };

  return (
    <div className="App">
      <MainHeader login={login} onClick={LogoutHandler} />
      {login && <Input onLogin={loginHandler} />}
      {!login && <Home />}
    </div>
  );
}

export default App;
