import React, { useState } from "react";
import Navbar from './components/Navbar'
import Textform from "./components/Textform";
// import About from "./components/About";
import Alert from "./components/Alert";
// import ErrorPage from "./components/ErrorPage";
// import Header from "./components/Header";   This one
// import Counter from "./components/Counter";
// import "./Counter.css"

// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//     Link } from "react-router-dom";
// import Use from './Use';   This one
// import Test from "./Test";
// let next = "World!";

function App(){
    // const[toggle,updatetoggle] = useState(false);    This One
    let[mode, setMode] = useState('light');

    let toggleMode= () =>{
        if(mode === 'dark'){
            setMode("light");
            document.body.style.backgroundColor="white"
            showAlert("Light Mode Enabled","success")
            document.title="TextTools - LightMode"
        }
        else{
            setMode('dark');
             document.body.style.backgroundColor="rgb(22 19 48 / 89%)"
             showAlert("Dark Mode Enabled","success")
             document.title="TextTools - DarkMode"
        }
       
    }

    const [alert, setAlert] = useState(null)

    const showAlert= (message,type)=> {
        setAlert({
            msg: message,
            type : type
        })
        
        setTimeout(() => {
            setAlert(null)
        }, 1000);
    }

    return (<>
    {/* <h1>Hey there,How are you</h1>  This one 
    <Use /> */}

        {/* <button onClick ={ () => {
            updatetoggle(!toggle);
        }} >Toggle</button>

        {toggle && <Test />}

        <h1>hello {next}</h1> */}

        {/* <Router> */}
            <Navbar title="TextTools" mode={mode} toggleMode={toggleMode} />
            <Alert alert={alert}/>

            {/* <div className="container my-3">
            <Routes>
            <Route path="/About" element= {<About/>} />
            <Route path="*" element= {<ErrorPage/>} />
            
            
            <Route path="/" heading="Enter your text" element = {<Textform showAlert = {showAlert} mode={mode}/>}/> */}
            <Textform heading="Enter your text"  showAlert = {showAlert} mode= {mode} /> 
            {/* </Routes>
            </div>
        </Router> */}
           
          
        {/* <div className="main">  This one
            <Header/>
            <Counter/> 
        </div> */}
    </>
    )
}

export default App;