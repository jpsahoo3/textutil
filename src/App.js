// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { ReactDOM } from "react-dom/client";

// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutil - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install Textutils Now'
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutil - Light Mode';
    }
  };
  return (
    <>
      {/* Lecture 6 */}
      {/* <Navbar title="TextUtil" aboutText="About TextUtil"/> */}
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtil"/> */}

      {/* Lecture 7,8 */}
      {/* <div className="container my-3">
        <TextForm heading = "Enter the text to analyze below"/>
      </div> */}

      {/* Lecture 10 */}
      {/* <div className="container my-3">
       <About/>
      </div> */}

      {/* Lecture 11,12,13,14,15 */}
      {/* <Navbar title="TextUtil" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>
      </div> */}

      {/* Lecture 16 */}
      {/* <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        
        <Routes>
          /users --> Component 1
          /users/home --> Component 2
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />}/>
        </Routes>
        
      </div>
      </Router> */}

      {/* Lecture 17 */}

      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode = {mode}/>    
      </div>
    </>
  );
}

export default App;
