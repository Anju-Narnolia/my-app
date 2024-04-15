// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar"; // it is parent components
import Textform from "./components/Textform"; // it is parent components
// import About from "./components/About"; // it is parent components
import { useState } from "react";
import Alert from "./components/Alert";
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import {  ,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState("light");
  const [mode1, SetMode1] = useState("dark");
  const [alert, SetAlert] = useState("hii", "welcome to this page");

  const showAlert = (type, message) => {
    SetAlert({
      type: type,
      msg: message,
    });
    setTimeout(() => {
      SetAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      SetMode1("light");
      showAlert("success", "Dark mode has been enabled");
      document.title = "My App Dark  Mode";
    } else {
      setMode("light");
      SetMode1("dark");
      showAlert("success", "Light mode has been enabled");
      document.title = "My App Light Mode";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          tittle="Text"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          mode1={mode1}
        />
        <Alert alert={alert} mode={mode} />
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About mode={mode} />}></Route>
          <Route
            exact path="/text"
            element={ */}
              <Textform
                tittle=" Write About Your Self"
                mode={mode}
                showAlert={showAlert}
              />
           {/* }
         ></Route> */}
         
         {/* </Routes>
      </Router> */}
    </>
  );
}

export default App;
