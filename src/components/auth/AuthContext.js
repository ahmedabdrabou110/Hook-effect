import React , {useState , useEffect} from 'react'


const AuthContext = React.createContext({
    isLoggedIn:false , 
    onLogout : () =>{} , 
    onLogin : ()=>{}
});

export const AuthContextProvider = (props)=>{
    const [login, setLogin] = useState(true);

    const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn")
    setLogin(true);
  };

  const loginHandler = (enteredEmail, enteredPassword) => {
    // make a local storage to save information of user to not need to login again

    localStorage.setItem("isLoggedIn" , "1");
    setLogin(false);
    };

    useEffect(()=>{
        const loggedUserInformations = localStorage.getItem("isLoggedIn");
        if(loggedUserInformations === "1" ) setLogin(false);
    } ,[])
    return (


        <AuthContext.Provider value={{isLoggedIn: login , onLogin:loginHandler , onLogout :logoutHandler}}>
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContext ; 