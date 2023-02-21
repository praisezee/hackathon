import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [day, setDay] = useState(false)
  const [theme, setTheme] = useState('App')
  const [validated, setValidated] = useState(false)
  
  useEffect(()=>{
    const userPrefrence = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches
    if (userPrefrence) {
      setTheme('bg-dark text-light App')
      setDay(true)
    }
  },[])
  const handledarkmode = () =>{
    setTheme(theme === 'App' ? 'bg-dark text-light App':'App')
    setDay(!day)
    
  }

  const handleSignUp =(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity()=== false) {
      e.preventDefaultt()
      e.stopPropagation();
    }
    setValidated(true);
  }
  const handleLogin =(e)=>{
    const form = e.currentTarget;
    if (form.checkValidity()=== false) {
      e.preventDefaultt()
      e.stopPropagation();
    }
    setValidated(true);
  }
  return (
    <UserContext.Provider
      value={{day,theme, handledarkmode, validated, handleSignUp, handleLogin}}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
