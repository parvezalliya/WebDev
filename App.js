import './App.css';
import {LoginForm} from './login';
import {SignupForm} from './signup';
import React, {useState} from "react";
import {CrudTable} from './dashboard';
import {Lawyers} from './lawyers';
function App() {
  const[currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
  //  <CrudTable/>
    // <Lawyers/>
    <div className="App">
      {
      currentForm === "login" ? <LoginForm onFormSwitch={toggleForm}/> : <SignupForm onFormSwitch={toggleForm}/>
     }
    </div>
  );
}

export default App;
