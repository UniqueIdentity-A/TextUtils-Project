//import logo from './logo.svg';
import React, { useState }  from "react";
import "./App.css";
import Alert from "./components/Alert";
//import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
//import {
  //createBrowserRouter,
  //createRoutesFromElements,
  //Routes,
  //Route,
//} from "react-router-dom";

function App() {
  const [mode, setMode] = useState(`light`); // iT explain drak mode is enebled or not in app.js 
  const [alert, setAlert] = useState(null);  // usestate created for alerts

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      typ : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () =>{
    if (mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
    showAlert("Light mode is Enabled", "success");
    document.title = "TextUtils - Light Mode"
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      document.body.style.color = "#f8f9fa"
      showAlert("Dark mode is Enabled", "success");
      document.title = "TextUtils - Dark Mode"
    }
  }


  return (
    <>
        <NavBar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />{" "}
        {/*PAssing props from NavBar.js to App.js Navbar component ( <NavBar title="TextUtils"  aboutText="About Us"/>)*/}
        <Alert alert={alert} />
        <div className="container">
           <TextForm showAlert={showAlert} heading="Enter the Text below" mode={mode}/> 
           {/*<About/>*/}
        </div>

    </>
  );
}

export default App;
